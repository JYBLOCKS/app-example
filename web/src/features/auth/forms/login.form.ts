import type { RegisterOptions } from "react-hook-form";
import type { LoginFormValues } from "../models/auth.models";

export const loginValidation: Record<keyof LoginFormValues, RegisterOptions<LoginFormValues>> = {
  username: { required: "required" },
  password: { required: "required" },
};
