import { Box, Container } from "@mui/material";
import NavBar from "../components/NavBar";

function PrincipalLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar pageRoute="home" />
      <Container>{children}</Container>
    </Box>
  );
}

export default PrincipalLayout;
