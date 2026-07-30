import { Alert, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { loginRequest } from "../api/auth.api";
import { loginValidation } from "../forms/login.form";
import type { LoginFormValues } from "../models/auth.models";
import { useAuthStore } from "../store/auth.store";

export function LoginForm() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const setSession = useAuthStore((state) => state.setSession);
  const [serverError, setServerError] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginFormValues>({ defaultValues: { username: "", password: "" } });

  const submit = async (values: LoginFormValues) => {
    setServerError(false);
    try {
      setSession(await loginRequest(values));
      navigate("/", { replace: true, state: { loginSuccess: true } });
    } catch {
      setServerError(true);
    }
  };

  return (
    <Paper component="section" elevation={4} sx={{ maxWidth: 440, width: "100%", p: { xs: 3, sm: 5 }, borderRadius: 3 }}>
      <Stack component="form" spacing={2.5} onSubmit={handleSubmit(submit)} noValidate>
        <Typography component="h1" variant="h4" sx={{ fontWeight: 800 }}>{t("login.title")}</Typography>
        <Typography color="text.secondary">{t("login.subtitle")}</Typography>
        {serverError && <Alert severity="error" role="alert">{t("login.error.invalidCredentials")}</Alert>}
        <TextField label={t("login.username")} autoComplete="username" {...register("username", loginValidation.username)} error={Boolean(errors.username)} helperText={errors.username ? t("login.error.requiredField") : " "} />
        <TextField label={t("login.password")} type="password" autoComplete="current-password" {...register("password", loginValidation.password)} error={Boolean(errors.password)} helperText={errors.password ? t("login.error.requiredField") : " "} />
        <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>{isSubmitting ? t("login.loading") : t("login.submit")}</Button>
      </Stack>
    </Paper>
  );
}
