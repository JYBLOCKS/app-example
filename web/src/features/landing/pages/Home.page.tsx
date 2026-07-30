import { Alert, Button, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { useFetchData } from "../hooks/useFetchData.hooks";
import PrincipalLayout from "../layouts/Principal.page";
import { useAuthStore } from "../../auth";

function Home() {
  const { t } = useTranslation();
  const { data, error, loading } = useFetchData();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const location = useLocation();
  const navigate = useNavigate();
  const loginSuccess = Boolean((location.state as { loginSuccess?: boolean } | null)?.loginSuccess);
  return (
    <PrincipalLayout>
      <Typography variant="h2" align="center">
        {t("home.welcome")}
      </Typography>
      {loginSuccess && <Alert severity="success" role="status" onClose={() => navigate(location.pathname, { replace: true, state: null })}>{t("login.success.loginSuccess")}</Alert>}
      {user && <Stack spacing={1} sx={{ alignItems: "center" }}><Typography>{user.displayName} ({user.roles.join(", ")})</Typography><Button onClick={() => { logout(); navigate("/login", { replace: true }); }}>{t("login.logout")}</Button></Stack>}

      <Typography variant="body1" align="center">
        {data && `Health check: ${JSON.stringify(data)}`}
        {loading && "Loading health check..."}
        {error && `Health check has an error: ${JSON.stringify(error)}`}
      </Typography>
    </PrincipalLayout>
  );
}
export default Home;
