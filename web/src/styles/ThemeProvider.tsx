/* eslint-disable react-refresh/only-export-components */
import type { PaletteMode } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import i18n from "../locale/i18n";
import { getTheme } from "./theme";

type AppLanguage = "en" | "es";
type AppThemeMode = PaletteMode;

type AppPreferences = {
  language: AppLanguage;
  themeMode: AppThemeMode;
  toggleLanguage: () => void;
  toggleThemeMode: () => void;
};

const LANGUAGE_KEY = "school-assist.language";
const THEME_KEY = "school-assist.theme";

const AppPreferencesContext = createContext<AppPreferences | null>(null);

const getStoredLanguage = (): AppLanguage => {
  if (typeof window === "undefined") {
    return "en";
  }

  return window.localStorage.getItem(LANGUAGE_KEY) === "es" ? "es" : "en";
};

const getStoredTheme = (): AppThemeMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
};

export const AppPreferencesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [language, setLanguage] = useState<AppLanguage>(getStoredLanguage);
  const [themeMode, setThemeMode] = useState<AppThemeMode>(getStoredTheme);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_KEY, language);
    void i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, themeMode);
  }, [themeMode]);

  const value = useMemo<AppPreferences>(
    () => ({
      language,
      themeMode,
      toggleLanguage: () =>
        setLanguage((current) => (current === "en" ? "es" : "en")),
      toggleThemeMode: () =>
        setThemeMode((current) => (current === "light" ? "dark" : "light")),
    }),
    [language, themeMode],
  );

  return (
    <AppPreferencesContext.Provider value={value}>
      {children}
    </AppPreferencesContext.Provider>
  );
};

export const useAppPreferences = () => {
  const context = useContext(AppPreferencesContext);

  if (!context) {
    throw new Error(
      "useAppPreferences must be used within AppPreferencesProvider",
    );
  }

  return context;
};

export const AppTheme = ({ children }: { children: ReactNode }) => {
  const { themeMode } = useAppPreferences();

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
