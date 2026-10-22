import { submitContactForm } from "@/app/actions/submit-contact-form";
import { beforeEach, describe, expect, it, vi } from "vitest";

const { redirectMock } = vi.hoisted(() => ({
  redirectMock: vi.fn(() => {
    throw new Error("NEXT_REDIRECT");
  }),
}));

vi.mock("next/navigation", () => ({ redirect: redirectMock }));

function validFormData() {
  const formData = new FormData();
  formData.set("email", "ovi@example.com");
  formData.set("message", "I would like to talk about a home loan.");
  formData.set("name", "Ovi");
  formData.set("phone", "480-555-0100");
  formData.set("turnstileToken", "turnstile-token");
  return formData;
}

const FORMSPARK_URL = "https://submit-form.com/a0or7TBtU";
const TURNSTILE_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Answers the Turnstile check, then hands Formspark requests to `formspark`.
function mockFetch(
  formspark: () => Promise<Response>,
  turnstile = { success: true },
) {
  const fetchMock = vi.fn<
    (url: string, request?: RequestInit) => Promise<Response>
  >((url) =>
    url === TURNSTILE_URL
      ? Promise.resolve(Response.json(turnstile))
      : formspark(),
  );
  vi.stubGlobal("fetch", fetchMock);
  return fetchMock;
}

function formsparkCalls(fetchMock: ReturnType<typeof mockFetch>) {
  return fetchMock.mock.calls.filter(([url]) => url === FORMSPARK_URL);
}

const initialContactFormState = { error: null };

describe("submitContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
    vi.stubEnv("TURNSTILE_SECRET_KEY", "turnstile-secret");
  });

  it("submits valid form data to Formspark and redirects", async () => {
    const fetchMock = mockFetch(() =>
      Promise.resolve(new Response(null, { status: 200 })),
    );

    await expect(
      submitContactForm(initialContactFormState, validFormData()),
    ).rejects.toThrow("NEXT_REDIRECT");

    expect(fetchMock).toHaveBeenCalledTimes(2);

    const [turnstileUrl, turnstileRequest] = fetchMock.mock.calls[0] as [
      string,
      RequestInit,
    ];
    expect(turnstileUrl).toBe(TURNSTILE_URL);
    expect(
      Object.fromEntries(turnstileRequest.body as URLSearchParams),
    ).toEqual({ response: "turnstile-token", secret: "turnstile-secret" });

    const [url, request] = fetchMock.mock.calls[1] as [string, RequestInit];
    const payload = JSON.parse(String(request.body)) as {
      _email: { subject: string };
      email: string;
      message: string;
      name: string;
      phone: string;
      reference: string;
    };

    expect(url).toBe("https://submit-form.com/a0or7TBtU");
    expect(request).toEqual(
      expect.objectContaining({
        method: "POST",
      }),
    );
    expect(payload).toMatchObject({
      email: "ovi@example.com",
      message: "I would like to talk about a home loan.",
      name: "Ovi",
      phone: "480-555-0100",
    });
    expect(payload).not.toHaveProperty("turnstileToken");
    expect(payload.reference).toMatch(/^[A-HJ-NP-Z2-9]{6}$/);
    expect(payload._email.subject).toBe(
      `Contact Form Submission [${payload.reference}]`,
    );
    expect(redirectMock).toHaveBeenCalledWith("/contact/thanks/");
  });

  it("rejects invalid form data before contacting Formspark", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const result = await submitContactForm(
      initialContactFormState,
      new FormData(),
    );

    expect(result.error).toBe("Please check the form and try again.");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("rejects a submission without a bot check token", async () => {
    const fetchMock = mockFetch(() =>
      Promise.resolve(new Response(null, { status: 200 })),
    );
    const formData = validFormData();
    formData.delete("turnstileToken");

    const result = await submitContactForm(initialContactFormState, formData);

    expect(result.error).toBe(
      "We couldn't confirm you're a person, not a bot. Please try again.",
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("does not send a submission that fails the bot check", async () => {
    const fetchMock = mockFetch(
      () => Promise.resolve(new Response(null, { status: 200 })),
      { success: false },
    );

    const result = await submitContactForm(
      initialContactFormState,
      validFormData(),
    );

    expect(result.error).toBe(
      "We couldn't confirm you're a person, not a bot. Please try again.",
    );
    expect(formsparkCalls(fetchMock)).toHaveLength(0);
    expect(redirectMock).not.toHaveBeenCalled();
  });

  it("shows bots that fill the honeypot the thank-you page without sending", async () => {
    const fetchMock = mockFetch(() =>
      Promise.resolve(new Response(null, { status: 200 })),
    );
    const formData = validFormData();
    formData.set("_honeypot", "https://spam.example");

    await expect(
      submitContactForm(initialContactFormState, formData),
    ).rejects.toThrow("NEXT_REDIRECT");

    expect(fetchMock).not.toHaveBeenCalled();
    expect(redirectMock).toHaveBeenCalledWith("/contact/thanks/");
  });

  it("sends nothing when the Turnstile secret is missing", async () => {
    vi.stubEnv("TURNSTILE_SECRET_KEY", "");
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    const fetchMock = mockFetch(() =>
      Promise.resolve(new Response(null, { status: 200 })),
    );

    const result = await submitContactForm(
      initialContactFormState,
      validFormData(),
    );

    expect(result.error).toBe(
      "Your message could not be sent. Please try again.",
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("reports a Formspark delivery failure", async () => {
    mockFetch(() => Promise.resolve(new Response(null, { status: 500 })));

    const result = await submitContactForm(
      initialContactFormState,
      validFormData(),
    );

    expect(result.error).toBe(
      "Your message could not be sent. Please try again.",
    );
    expect(redirectMock).not.toHaveBeenCalled();
  });

  it("aborts a stalled Formspark request", async () => {
    const timeoutError = new DOMException("Timed out", "TimeoutError");
    const timeoutSignal = AbortSignal.abort(timeoutError);
    const timeoutSpy = vi
      .spyOn(AbortSignal, "timeout")
      .mockReturnValue(timeoutSignal);
    const fetchMock = mockFetch(() => Promise.reject(timeoutSignal.reason));

    const result = await submitContactForm(
      initialContactFormState,
      validFormData(),
    );

    expect(timeoutSpy).toHaveBeenCalledWith(10_000);
    expect(fetchMock).toHaveBeenCalledWith(
      FORMSPARK_URL,
      expect.objectContaining({ signal: timeoutSignal }),
    );
    expect(result.error).toBe(
      "Your message could not be sent. Please try again.",
    );
    expect(redirectMock).not.toHaveBeenCalled();
  });
});
