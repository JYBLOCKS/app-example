import { Box } from "@mui/material";
import { LoginForm } from "../components/LoginForm";

function Login() {
  return (
    <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", px: 2, background: "linear-gradient(135deg, #eef5ff 0%, #fff 55%, #f4efff 100%)" }}>
      <LoginForm />
    </Box>
  );
}
export default Login;
