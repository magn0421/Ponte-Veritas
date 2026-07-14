"use server";

import { CONSENT_VERSION, type LeadFormState } from "./lead-state";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Captación OPCIONAL de contactos tras el resultado. No bloquea el resultado.
 *
 * MINIMIZACIÓN DE DATOS (spec §14): solo se registran los campos permitidos.
 * NO se reciben ni almacenan pressureLevel (P5), copingResources (P6) ni las
 * respuestas completas P1–P12. El consentimiento es explícito y no premarcado.
 *
 * Persistencia: por ahora solo se registra en el servidor (como el formulario
 * de contacto actual). Aquí se conecta luego el envío por correo o la base de
 * datos, sin cambiar la interfaz del formulario.
 */
export async function enviarLead(
  _prev: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const consent = formData.get("consent") === "on";

  const errors: LeadFormState["errors"] = {};
  if (name.length < 2) errors.name = "Cuéntanos tu nombre.";
  if (!EMAIL_RE.test(email)) errors.email = "Ingresa un correo electrónico válido.";
  if (!consent) errors.consent = "Necesitamos tu consentimiento para escribirte.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Revisa los campos marcados.", errors };
  }

  // Solo los campos permitidos por la especificación (whitelist).
  const lead = {
    leadId: crypto.randomUUID(),
    name,
    email,
    primaryProfile: String(formData.get("primaryProfile") ?? ""),
    secondaryProfile: String(formData.get("secondaryProfile") ?? ""),
    showSecondaryProfile: formData.get("showSecondaryProfile") === "true",
    coachingKnowledge: String(formData.get("coachingKnowledge") ?? ""),
    coachingUnderstanding: String(formData.get("coachingUnderstanding") ?? ""),
    readinessLevel: String(formData.get("readinessLevel") ?? ""),
    nextStepIntent: String(formData.get("nextStepIntent") ?? ""),
    createdAt: new Date().toISOString(),
    consentVersion: CONSENT_VERSION,
    consentTimestamp: new Date().toISOString(),
  };

  // TODO: conectar envío real (correo / base de datos). Por ahora solo registro.
  console.log("[lead] nuevo contacto del cuestionario:", lead);

  return {
    status: "success",
    message: `Gracias, ${name}. Te escribiremos muy pronto al correo que nos dejaste.`,
    errors: {},
  };
}
