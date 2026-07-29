import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useFetchData } from "../hooks/useFetchData.hooks";
import PrincipalLayout from "../layouts/Principal.page";

function Home() {
  const { t } = useTranslation();
  const { data, error, loading } = useFetchData();
  return (
    <PrincipalLayout>
      <Typography variant="h2" align="center">
        {t("home.welcome")}
      </Typography>

      <Typography variant="body1" align="center">
        {data && `Health check: ${JSON.stringify(data)}`}
        {loading && "Loading health check..."}
        {error && `Health check has an error: ${JSON.stringify(error)}`}
      </Typography>
    </PrincipalLayout>
  );
}
export default Home;
