import React from "react";
import { render, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

afterEach(cleanup);

describe("DASHBOARD", () => {
  describe("Dashboard renders without crashing.", () => {
    it("Renders the Dashboard component", () => {
      render(<Dashboard />);
    });
    it("Renders the Display component", () => {
      const { getByText } = render(<Dashboard />);
      getByText(/open/i);
      getByText(/unlocked/i);
    });
    it("Renders the Controls component", () => {
      const { getByText } = render(<Dashboard />);
      getByText(/close gate/i);
      getByText(/lock gate/i);
    });
  });
});
