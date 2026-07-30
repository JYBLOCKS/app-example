import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Login, ProtectedRoute } from "./features/auth/index.ts";
import { Home, NotFound } from "./features/landing/pages/index.ts";
import { AppPreferencesProvider, AppTheme } from "./styles/ThemeProvider.tsx";
import { routes } from "./utils/routes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppPreferencesProvider>
      <AppTheme>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path={routes.home} element={<Home />} />
            </Route>
            <Route path={routes.login} element={<Login />} />
            <Route path={routes.notFound} element={<NotFound />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </BrowserRouter>
      </AppTheme>
    </AppPreferencesProvider>
  </StrictMode>,
);
