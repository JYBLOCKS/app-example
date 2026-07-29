import { fireEvent, render, screen, within } from "../../../utils/test-config";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router";
import Home from "../pages/Home.page";
import { useFetchData } from "../hooks/useFetchData.hooks";

vi.mock("../hooks/useFetchData.hooks", () => ({
  useFetchData: vi.fn(),
}));

const mockedUseFetchData = vi.mocked(useFetchData);

const renderHome = () =>
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>,
  );

describe("Home page", () => {
  beforeEach(() => {
    mockedUseFetchData.mockReset();
  });

  it("shows the welcome message and loading state", () => {
    mockedUseFetchData.mockReturnValue({ data: null, error: null, loading: true });

    renderHome();

    expect(
      screen.getByRole("heading", { name: "Welcome to our application!" }),
    ).toBeTruthy();
    expect(screen.getByText("Loading health check...")).toBeTruthy();
  });

  it("shows the health check response when the request succeeds", () => {
    mockedUseFetchData.mockReturnValue({
      data: { status: "ok", uptime: 12, timestamp: "2026-07-29T00:00:00.000Z" },
      error: null,
      loading: false,
    });

    renderHome();

    expect(
      screen.getByText(
        'Health check: {"status":"ok","uptime":12,"timestamp":"2026-07-29T00:00:00.000Z"}',
      ),
    ).toBeTruthy();
  });

  it("shows the health check error", () => {
    mockedUseFetchData.mockReturnValue({
      data: null,
      error: new Error("service unavailable"),
      loading: false,
    });

    renderHome();

    expect(
      screen.getByText("Health check has an error: {}"),
    ).toBeTruthy();
  });

  it("opens the mobile navigation and closes it from a route link", () => {
    mockedUseFetchData.mockReturnValue({ data: null, error: null, loading: false });

    renderHome();

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const menu = screen.getByRole("button", { name: "Open menu" }).closest("header");
    expect(menu).not.toBeNull();
    expect(within(menu as HTMLElement).getAllByRole("link", { name: "Home" })).toHaveLength(2);

    fireEvent.click(within(menu as HTMLElement).getAllByRole("link", { name: "Home" })[1]);

    expect(screen.queryByRole("button", { name: "Open menu" })).toBeTruthy();
    expect(screen.queryByRole("link", { name: "Login" })).toBeTruthy();
  });
});
