export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  errors: Partial<Record<"nombre" | "email" | "telefono" | "razon" | "mensaje", string>>;
}

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  errors: {},
};
