import { describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router";
import { render, screen } from "../../../utils/test-config";
import NotFound from "../../landing/pages/NotFound.page";
import Login from "../pages/Login.page";

describe("public authentication pages", () => {
  it("renders the login title", () => {
      render(<MemoryRouter><Login /></MemoryRouter>);

    expect(screen.getByRole("heading", { name: "APP" })).toBeTruthy();
  });

  it("renders the not found title and message", () => {
    render(<NotFound />);

    expect(
      screen.getByRole("heading", { name: "404 - Not Found" }),
    ).toBeTruthy();
    expect(
      screen.getByText("The page you are looking for does not exist."),
    ).toBeTruthy();
  });
});
