/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PLAUSIBLE_DOMAIN?: string;
  readonly RESEND_API_KEY?: string;
  readonly SLACK_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
