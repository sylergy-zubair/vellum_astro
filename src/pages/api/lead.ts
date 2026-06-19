import type { APIRoute } from "astro";

/* Cloudflare Worker endpoint for lead capture.
   Validates payload, logs to console (placeholder for Slack/Resend),
   returns 200 with intent. Returns 400 with field errors on failure.

   To wire in real providers, replace the `dispatch` function with calls to:
     - RESEND_API_KEY via fetch to https://api.resend.com/emails
     - SLACK_WEBHOOK_URL via fetch with the lead payload
   Both keys are read from Astro.locals.runtime.env in the Cloudflare adapter. */

type LeadPayload = {
  intent?: string;
  name?: string;
  email?: string;
  agency?: string;
  branches?: string;
  message?: string;
};

const VALID_INTENTS = new Set(["trial", "demo", "waitlist"]);

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const validate = (data: LeadPayload) => {
  const fieldErrors: Record<string, string> = {};
  if (!data.intent || !VALID_INTENTS.has(data.intent)) {
    fieldErrors.intent = "Choose a valid option.";
  }
  if (!data.name || data.name.trim().length < 2) {
    fieldErrors.name = "Please enter your name.";
  }
  if (!data.email || !emailRegex.test(data.email)) {
    fieldErrors.email = "Please enter a valid work email.";
  }
  if (!data.agency || data.agency.trim().length < 2) {
    fieldErrors.agency = "Please enter your agency name.";
  }
  if (!data.branches) {
    fieldErrors.branches = "Please choose a branch count.";
  }
  return fieldErrors;
};

const dispatch = async (data: LeadPayload, env: Record<string, string | undefined>) => {
  // Placeholder dispatch. In production, wire up Resend + Slack here.
  // Example (commented):
  // if (env.SLACK_WEBHOOK_URL) {
  //   await fetch(env.SLACK_WEBHOOK_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ text: `New Vellum lead (${data.intent}): ${data.name} @ ${data.agency}` }),
  //   });
  // }
  // if (env.RESEND_API_KEY && data.email) {
  //   await fetch("https://api.resend.com/emails", {
  //     method: "POST",
  //     headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       from: "Vellum <hello@vellum.example>",
  //       to: data.email,
  //       subject: "Welcome to Vellum",
  //       text: `Hi ${data.name}, thanks for your interest.`,
  //     }),
  //   });
  // }
  console.log("[vellum] lead captured", {
    intent: data.intent,
    name: data.name,
    agency: data.agency,
    branches: data.branches,
    email: data.email ? data.email.replace(/(^.).+(@.*$)/, "$1•••$2") : undefined,
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  let payload: LeadPayload = {};
  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Invalid JSON." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const fieldErrors = validate(payload);
  if (Object.keys(fieldErrors).length) {
    return new Response(JSON.stringify({ ok: false, error: "Validation failed.", fieldErrors }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const env = (locals as any)?.runtime?.env ?? {};
  await dispatch(payload, env);

  return new Response(
    JSON.stringify({ ok: true, intent: payload.intent, message: "Lead received." }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};

export const prerender = false;
