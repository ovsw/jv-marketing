"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

// Cloudflare Turnstile: an invisible bot check. Most visitors see nothing; a
// visitor that Cloudflare finds suspicious gets a checkbox to click.
// https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/

type TurnstileOptions = {
  sitekey: string;
  action?: string;
  execution?: "render" | "execute";
  appearance?: "always" | "execute" | "interaction-only";
  retry?: "auto" | "never";
  callback?: (token: string) => void;
  "before-interactive-callback"?: () => void;
  "error-callback"?: (code: string) => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
};

type Turnstile = {
  render(container: HTMLElement, options: TurnstileOptions): string;
  execute(widgetId: string): void;
  reset(widgetId: string): void;
  remove(widgetId: string): void;
};

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

type PendingToken = {
  resolve(token: string): void;
  reject(error: Error): void;
};

// Cloudflare requires this exact URL; the script must not be self-hosted.
const scriptUrl =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let loading: Promise<Turnstile> | undefined;

function loadTurnstile(): Promise<Turnstile> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  loading ??= new Promise<Turnstile>((resolve, reject) => {
    const script = document.createElement("script");
    // Let the next submission try again, for example after a network drop.
    const fail = (message: string) => {
      loading = undefined;
      script.remove();
      reject(new Error(message));
    };
    script.src = scriptUrl;
    script.async = true;
    script.onload = () => {
      if (window.turnstile) resolve(window.turnstile);
      else fail("Turnstile did not start");
    };
    script.onerror = () => fail("Turnstile did not load");
    document.head.append(script);
  });
  return loading;
}

// Gets a fresh Turnstile token for each submission. The script loads when
// the form nears the screen, so visitors who never reach the form do not
// download it. `interactive` is true while Cloudflare shows the checkbox.
export function useTurnstileToken(
  siteKey: string | undefined,
  container: RefObject<HTMLDivElement | null>,
) {
  const widget = useRef<string | undefined>(undefined);
  const pending = useRef<PendingToken | undefined>(undefined);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const element = container.current;
    if (!element || !siteKey || typeof IntersectionObserver === "undefined")
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        loadTurnstile().catch(() => undefined);
      },
      { rootMargin: "600px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [siteKey, container]);

  useEffect(
    () => () => {
      if (widget.current) window.turnstile?.remove(widget.current);
    },
    [],
  );

  async function token() {
    if (!siteKey) throw new Error("Turnstile site key missing");
    const turnstile = await loadTurnstile();
    if (!container.current) throw new Error("Turnstile container missing");
    const settle = (finish: (handlers: PendingToken) => void) => {
      if (pending.current) finish(pending.current);
      pending.current = undefined;
    };
    const fail = () =>
      settle((handlers) => handlers.reject(new Error("Turnstile failed")));
    const result = new Promise<string>((resolve, reject) => {
      pending.current = { resolve, reject };
    });
    if (widget.current === undefined) {
      widget.current = turnstile.render(container.current, {
        sitekey: siteKey,
        action: "contact",
        execution: "execute",
        appearance: "interaction-only",
        retry: "never",
        callback: (value) => settle((handlers) => handlers.resolve(value)),
        "before-interactive-callback": () => setInteractive(true),
        "error-callback": fail,
        "expired-callback": fail,
        "timeout-callback": fail,
      });
    } else {
      setInteractive(false);
      turnstile.reset(widget.current);
    }
    turnstile.execute(widget.current);
    return result;
  }

  return { interactive, token };
}
