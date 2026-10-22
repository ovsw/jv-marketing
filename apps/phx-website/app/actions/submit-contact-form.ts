"use server";

import { randomInt } from "node:crypto";
import { redirect } from "next/navigation";
import { z } from "zod";
import {
  CONTACT_BOT_CHECK_ERROR,
  CONTACT_SEND_FAILED_ERROR,
} from "@/app/actions/contact-form-messages";

const FORMSPARK_ACTION_URL = "https://submit-form.com/a0or7TBtU";
const FORMSPARK_TIMEOUT_MS = 10_000;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const TURNSTILE_TIMEOUT_MS = 10_000;
const CONTACT_REFERENCE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CONTACT_REFERENCE_LENGTH = 6;

const contactSubmissionSchema = z.object({
  email: z.email().max(320),
  message: z.string().max(5_000),
  name: z.string().trim().min(1).max(200),
  phone: z.string().max(50),
});

// Cloudflare tokens are at most 2048 characters.
const turnstileTokenSchema = z.string().min(1).max(2048);

export type ContactFormState = {
  error: string | null;
};

function createContactReference() {
  return Array.from({ length: CONTACT_REFERENCE_LENGTH }, () =>
    CONTACT_REFERENCE_ALPHABET.charAt(
      randomInt(CONTACT_REFERENCE_ALPHABET.length),
    ),
  ).join("");
}

// Cloudflare checks the token that the browser's Turnstile widget produced.
// Each token passes this check once only.
async function passesTurnstile(token: string, secret: string) {
  const response = await fetch(TURNSTILE_VERIFY_URL, {
    body: new URLSearchParams({ response: token, secret }),
    method: "POST",
    signal: AbortSignal.timeout(TURNSTILE_TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`Turnstile answered ${response.status}`);
  const result: unknown = await response.json();
  return (
    typeof result === "object" &&
    result !== null &&
    "success" in result &&
    result.success === true
  );
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const submission = contactSubmissionSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
    name: formData.get("name"),
    phone: formData.get("phone"),
  });

  if (!submission.success) {
    return { error: "Please check the form and try again." };
  }

  // People never see the honeypot field; a bot that fills it in gets the
  // normal thank-you page, but nothing is sent.
  if (formData.get("_honeypot")) {
    redirect("/contact/thanks/");
  }

  // Only a message that passes the bot check reaches Formspark.
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) {
    console.error("TURNSTILE_SECRET_KEY is not set; contact form disabled.");
    return { error: CONTACT_SEND_FAILED_ERROR };
  }
  const turnstileToken = turnstileTokenSchema.safeParse(
    formData.get("turnstileToken"),
  );
  if (!turnstileToken.success) {
    return { error: CONTACT_BOT_CHECK_ERROR };
  }
  try {
    if (!(await passesTurnstile(turnstileToken.data, turnstileSecret))) {
      return { error: CONTACT_BOT_CHECK_ERROR };
    }
  } catch {
    return { error: CONTACT_SEND_FAILED_ERROR };
  }

  const reference = createContactReference();

  try {
    const response = await fetch(FORMSPARK_ACTION_URL, {
      body: JSON.stringify({
        ...submission.data,
        reference,
        _email: {
          subject: `Contact Form Submission [${reference}]`,
        },
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      signal: AbortSignal.timeout(FORMSPARK_TIMEOUT_MS),
    });

    if (!response.ok) {
      return { error: CONTACT_SEND_FAILED_ERROR };
    }
  } catch {
    return { error: CONTACT_SEND_FAILED_ERROR };
  }

  redirect("/contact/thanks/");
}
