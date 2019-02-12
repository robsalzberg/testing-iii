import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls";
import Dashboard from "../dashboard/Dashboard.js";

afterEach(cleanup);

describe("CONTROLS", () => {
  it("defaults to open and unlocked", () => {
    const { getByText } = render(<Controls />);

    getByText(/close gate/i);
    getByText(/lock gate/i);
  });

  it("Render buttons to toggle.", () => {
    const { getByText } = render(<Controls closed={false} locked={false} />);
    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i);

    expect(lockButton).toHaveTextContent(/lock gate/i);
    expect(closeButton).toHaveTextContent(/close gate/i);
  });

  it("button to close gate switches to open gate after closing", () => {
    render(<Dashboard />);
    const component = render(<Controls />);
    const openButton = component.getByText(/close gate/i);

    fireEvent.click(openButton);

    expect(openButton).toHaveTextContent(/open gate/i);
  });
});

// the closed toggle button is disabled if the gate is closed

// the locked toggle button is disabled if the gate is open
