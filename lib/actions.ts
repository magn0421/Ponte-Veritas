"use server";

import type { ContactFormState } from "./contact-form-state";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Server action del formulario de contacto.
 * Por ahora solo valida y devuelve confirmación; el envío real
 * a email/CRM se conecta después en este mismo punto.
 */
export async function enviarContacto(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nombre = String(formData.get("nombre") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const telefono = String(formData.get("telefono") ?? "").trim();
  const razon = String(formData.get("razon") ?? "").trim();
  const mensaje = String(formData.get("mensaje") ?? "").trim();

  const errors: ContactFormState["errors"] = {};
  if (nombre.length < 2) errors.nombre = "Cuéntanos tu nombre.";
  if (!EMAIL_RE.test(email)) errors.email = "Ingresa un correo electrónico válido.";
  if (telefono && !/^[\d+\s()-]{7,20}$/.test(telefono))
    errors.telefono = "Ingresa un teléfono válido (o déjalo vacío).";
  if (!razon) errors.razon = "Selecciona lo que mejor describe tu momento.";
  if (mensaje.length < 10)
    errors.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados e inténtalo de nuevo.",
      errors,
    };
  }

  // TODO: conectar envío real (email / CRM). Por ahora solo registramos en servidor.
  console.log("[contacto] nueva solicitud:", { nombre, email, telefono, razon });

  return {
    status: "success",
    message: `Gracias, ${nombre}. Recibimos tu mensaje y te escribiremos muy pronto para agendar tu conversación.`,
    errors: {},
  };
}
