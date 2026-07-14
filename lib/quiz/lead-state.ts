export interface LeadFormState {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<"name" | "email" | "consent", string>>;
}

export const initialLeadFormState: LeadFormState = {
  status: "idle",
  message: "",
  errors: {},
};

/** Versión del texto de consentimiento aceptado (para trazabilidad). */
export const CONSENT_VERSION = "v1-2026-07";
