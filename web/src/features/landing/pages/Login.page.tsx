import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("login.title")}</h1>
    </div>
  );
}
export default Login;
