import { useTranslation } from "react-i18next";

function NotFound() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("notFound.title")}</h1>
      <p>{t("notFound.message")}</p>
    </div>
  );
}

export default NotFound;
