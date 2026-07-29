/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, type PaletteMode } from "@mui/material/styles";

export const getTheme = (mode: PaletteMode) => {
  const isDark = mode === "dark";

  const palette = {
    mode,
    primary: {
      main: isDark ? "#2f72d6" : "#003D9B",
      light: isDark ? "#3787ff" : "#0052CC",
      dark: isDark ? "#2e54a1" : "#001848",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: isDark ? "#8EA2C6" : "#4C5E85",
      light: isDark ? "#B9C7DF" : "#BFD1FF",
      dark: isDark ? "#637894" : "#35466C",
      contrastText: "#FFFFFF",
    },
    success: {
      main: isDark ? "#5ECF95" : "#006844",
    },
    warning: {
      main: isDark ? "#E2B85E" : "#D18B09",
    },
    error: {
      main: isDark ? "#FF8D84" : "#BA1A1A",
    },
    info: {
      main: isDark ? "#9EBEFF" : "#0052CC",
    },
    background: {
      default: isDark ? "#06080C" : "#F8F9FB",
      paper: isDark ? "#0D1218" : "#FFFFFF",
    },
    text: {
      primary: isDark ? "#F3F5F7" : "#191C1E",
      secondary: isDark ? "#A7B0BE" : "#434654",
      disabled: isDark ? "#6B7280" : "#737685",
    },
    divider: isDark ? "rgba(167, 176, 190, 0.16)" : "rgba(25, 28, 30, 0.08)",
    action: {
      hover: isDark ? "rgba(158, 190, 255, 0.08)" : "rgba(0, 82, 204, 0.04)",
      selected: isDark ? "rgba(158, 190, 255, 0.16)" : "rgba(0, 82, 204, 0.1)",
      disabled: isDark
        ? "rgba(167, 176, 190, 0.35)"
        : "rgba(115, 118, 133, 0.4)",
      disabledBackground: isDark
        ? "rgba(167, 176, 190, 0.1)"
        : "rgba(115, 118, 133, 0.12)",
    },
  } as const;

  return createTheme({
    palette,
    typography: {
      fontFamily: [
        "Inter",
        "Roboto",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        `"Segoe UI"`,
        "Arial",
        "sans-serif",
      ].join(","),
      h1: { fontWeight: 800, letterSpacing: "-0.04em" },
      h2: { fontWeight: 800, letterSpacing: "-0.035em" },
      h3: { fontWeight: 800, letterSpacing: "-0.03em" },
      h4: { fontWeight: 700, letterSpacing: "-0.025em" },
      h5: { fontWeight: 700 },
      h6: { fontWeight: 700 },
      button: { fontWeight: 700, textTransform: "none" },
    },
    shape: { borderRadius: 14 },
    shadows: [
      "none",
      isDark
        ? "0px 1px 2px rgba(0, 0, 0, 0.55)"
        : "0px 1px 2px rgba(15, 23, 42, 0.08)",
      isDark
        ? "0px 4px 10px rgba(0, 0, 0, 0.55)"
        : "0px 4px 12px rgba(15, 23, 42, 0.08)",
      isDark
        ? "0px 8px 18px rgba(0, 0, 0, 0.6)"
        : "0px 8px 20px rgba(15, 23, 42, 0.1)",
      isDark
        ? "0px 12px 28px rgba(0, 0, 0, 0.65)"
        : "0px 12px 30px rgba(15, 23, 42, 0.12)",
      ...Array(20).fill(
        isDark
          ? "0px 16px 40px rgba(0, 0, 0, 0.7)"
          : "0px 16px 42px rgba(15, 23, 42, 0.12)",
      ),
    ] as any,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: isDark ? "#6B7280 #06080C" : "#C3C6D6 #F8F9FB",
            backgroundColor: isDark ? "#06080C" : "#F8F9FB",
          },
          "*": { boxSizing: "border-box" },
          "*::-webkit-scrollbar": { width: 8, height: 8 },
          "*::-webkit-scrollbar-track": {
            backgroundColor: isDark ? "#06080C" : "#F8F9FB",
          },
          "*::-webkit-scrollbar-thumb": {
            borderRadius: 999,
            backgroundColor: isDark ? "#6B7280" : "#C3C6D6",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: isDark ? "#A7B0BE" : "#737685",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            border: `1px solid ${isDark ? "rgba(167, 176, 190, 0.14)" : "rgba(25, 28, 30, 0.08)"}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: "none",
          },
          contained: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 18,
            backgroundImage: "none",
            border: `1px solid ${isDark ? "rgba(167, 176, 190, 0.14)" : "rgba(25, 28, 30, 0.08)"}`,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          size: "small",
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundColor: isDark
              ? "rgba(13, 18, 24, 0.82)"
              : "rgba(255, 255, 255, 0.85)",
            "& fieldset": {
              borderColor: isDark
                ? "rgba(167, 176, 190, 0.24)"
                : "rgba(25, 28, 30, 0.14)",
            },
            "&:hover fieldset": {
              borderColor: isDark
                ? "rgba(158, 190, 255, 0.7)"
                : "rgba(0, 82, 204, 0.55)",
            },
            "&.Mui-focused fieldset": {
              borderColor: isDark ? "#9EBEFF" : "#003D9B",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDark ? "#A7B0BE" : "#434654",
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${isDark ? "rgba(167, 176, 190, 0.14)" : "rgba(25, 28, 30, 0.08)"}`,
          },
          head: {
            fontWeight: 700,
            color: isDark ? "#F3F5F7" : "#191C1E",
            backgroundColor: isDark
              ? "rgba(13, 18, 24, 0.95)"
              : "rgba(248, 249, 251, 0.92)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
            fontWeight: 700,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 22,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 10,
            fontSize: "0.78rem",
          },
        },
      },
    },
  });
};
