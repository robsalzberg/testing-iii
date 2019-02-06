import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

afterEach(cleanup);


it('checks to see if gate displays when open and unlocked', () =>{
    const component = render(<Display closed = {false} locked = {false}/>);
    const open = component.getByText(/open/i);
    const unlocked = component.getByText(/unlocked/i);

    expect(open).toHaveTextContent(/open/i);
    expect(unlocked).toHaveTextContent(/unlocked/i);
});

it('checks to see if gate displays when closed and locked', () =>{
    const component = render(<Display closed = {true} locked = {true}/>);
    const closed = component.getByText(/closed/i);
    const locked = component.getByText(/locked/i);

    expect(closed).toHaveTextContent(/closed/i);
    expect(locked).toHaveTextContent(/locked/i);
});

it("displays 'Closed' if the closed prop is true and uses the 'red-led' class", () => {
  const { getByText } = render(<Display closed={true} />);
  getByText(/closed/i);
  const div = getByText(/closed/i);
  expect(div).toHaveClass("red-led");
});

it("displays 'Open' if the closed prop is false and uses the 'green-led' class", () => {
  const { getByText } = render(<Display closed={false} />);
  getByText(/open/i);
  const div = getByText(/open/i);
  expect(div).toHaveClass("green-led");
});

it("displays 'Locked' if the locked prop is true and uses the 'red-led' class", () => {
  const { getByText } = render(<Display locked={true} />);
  getByText(/locked/i);
  // when locked use the red-led class
  const div = getByText(/locked/i);
  expect(div).toHaveClass("red-led");
});

it("displays 'Unlocked' if the locked prop is false and uses the 'green-led' class", () => {
  const { getByText } = render(<Display locked={false} />);
  getByText(/unlocked/i);
  // when unlocked use the green-led class
  const div = getByText(/unlocked/i);
  expect(div).toHaveClass("green-led");
});