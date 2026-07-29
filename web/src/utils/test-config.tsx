// oxlint-disable react/only-export-components

import { render } from "@testing-library/react";
import { AppPreferencesProvider, AppTheme } from "../styles/ThemeProvider";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppPreferencesProvider>
      <AppTheme>{children}</AppTheme>
    </AppPreferencesProvider>
  );
};

const customRender = (ui: React.ReactNode, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
