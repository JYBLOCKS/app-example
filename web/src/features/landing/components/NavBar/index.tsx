import {
  AllInclusive,
  DarkMode,
  Language,
  LightMode,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import { useAppPreferences } from "../../../../styles/ThemeProvider";
import { routes } from "../../../../utils/routes";

const navItems = [{ key: "home", to: routes.home }] as const;

const actionLinks = [{ key: "login", to: routes.login }] as const;

export const NavBar = ({ pageRoute }: { pageRoute: string }) => {
  const { t } = useTranslation();
  const { language, themeMode, toggleLanguage, toggleThemeMode } =
    useAppPreferences();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const menuId = "public-navigation-menu";

  const links = useMemo(
    () =>
      navItems.map((item) => ({
        ...item,
        label: t(`${pageRoute}.nav.routes.${item.key}`),
      })),
    [t, pageRoute],
  );

  const activePath =
    location.pathname === "/"
      ? "/"
      : (navItems.find((item) => location.pathname === item.to)?.to ?? "");

  const navLinkSx = (isActive: boolean) => ({
    borderRadius: 0,
    color: isActive ? "primary.main" : "text.secondary",
    px: 1.25,
    py: 0.75,
    minWidth: 0,
    fontWeight: isActive ? 700 : 600,
    textDecoration: "none",
    borderBottom: 2,
    borderBottomStyle: "solid",
    borderBottomColor: isActive ? "primary.main" : "transparent",
    letterSpacing: "0.01em",
    "&:hover": {
      backgroundColor: "action.hover",
      color: "primary.main",
    },
  });

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={(theme) => ({
        backdropFilter: "blur(18px)",
        bgcolor:
          theme.palette.mode === "dark"
            ? alpha(theme.palette.background.default, 0.96)
            : alpha(theme.palette.background.paper, 0.94),
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: "none",
        color: theme.palette.text.primary,
      })}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: 80,
            display: "grid",
            gridTemplateColumns: { xs: "1fr auto", md: "auto 1fr auto" },
            alignItems: "center",
            columnGap: 2,
          }}
        >
          <Stack
            component={Link}
            to="/"
            direction="row"
            spacing={1.2}
            sx={{
              alignItems: "center",
              color: "primary.main",
              textDecoration: "none",
              flexShrink: 0,
              justifySelf: "start",
            }}
          >
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: 2,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                display: "grid",
                placeItems: "center",
              }}
            >
              <AllInclusive />
            </Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 800, letterSpacing: "-0.03em" }}
            >
              {t(`${pageRoute}.appName`)}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{
              display: { xs: "none", md: "flex" },
              justifySelf: "center",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {links.map((link) => (
              <Button
                key={link.key}
                component={Link}
                to={link.to}
                variant="text"
                sx={navLinkSx(activePath === link.to)}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={0.75}
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifySelf: "end",
            }}
          >
            <Button
              variant="text"
              onClick={toggleLanguage}
              startIcon={<Language />}
              sx={{ minWidth: 84, px: 1.5 }}
            >
              {language === "en" ? "EN" : "ES"}
            </Button>
            <IconButton
              aria-label={t(`${pageRoute}.nav.theme.toggleTheme`)}
              onClick={toggleThemeMode}
              size="small"
            >
              {themeMode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
            <Button
              component={Link}
              to={routes.login}
              variant="text"
              sx={{ minWidth: 74 }}
            >
              {t(`${pageRoute}.nav.routes.login`)}
            </Button>
          </Stack>

          <IconButton
            aria-controls={open ? menuId : undefined}
            aria-expanded={open}
            aria-label={t(`${pageRoute}.nav.menu.openMenu`)}
            onClick={() => setOpen((current) => !current)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              justifySelf: "end",
            }}
          >
            <Menu />
          </IconButton>
        </Toolbar>

        {open ? (
          <Box id={menuId} sx={{ display: { xs: "block", md: "none" }, pb: 3 }}>
            <Box
              sx={(theme) => ({
                p: 2,
                borderRadius: 3,
                bgcolor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
              })}
            >
              <Stack spacing={1} sx={{ pb: 2 }}>
                {links.map((link) => (
                  <Button
                    key={link.key}
                    component={Link}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    variant="text"
                    sx={{
                      justifyContent: "flex-start",
                      px: 1.5,
                      py: 1.15,
                      borderRadius: 2,
                      bgcolor:
                        activePath === link.to
                          ? "action.selected"
                          : "transparent",
                      color:
                        activePath === link.to
                          ? "primary.main"
                          : "text.primary",
                      fontWeight: activePath === link.to ? 700 : 600,
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                <Button
                  variant="outlined"
                  onClick={toggleLanguage}
                  sx={{ flex: 1 }}
                >
                  {language === "en" ? "ES" : "EN"}
                </Button>
                <Button
                  variant="outlined"
                  onClick={toggleThemeMode}
                  sx={{ flex: 1 }}
                >
                  {themeMode === "light" ? <DarkMode /> : <LightMode />}
                </Button>
              </Stack>
              <Stack spacing={1}>
                {actionLinks.map((action) => (
                  <Button
                    key={action.key}
                    component={Link}
                    to={action.to}
                    onClick={() => setOpen(false)}
                    variant={action.key === "login" ? "contained" : "outlined"}
                    fullWidth
                  >
                    {t(
                      `${pageRoute}.nav.routes.${action.key === "login" ? "login" : "signUp"}`,
                    )}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Box>
        ) : null}
      </Container>
    </AppBar>
  );
};

export default NavBar;
