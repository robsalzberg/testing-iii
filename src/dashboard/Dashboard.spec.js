import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from './Dashboard';

describe('Dashboard renders without crashing.', () => {
    it('Renders the Dashboard component', () => {
        render(<Dashboard />);
    })
    it('Renders the Display component', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/open/i);
        getByText(/unlocked/i);
    })
    it('Renders the Controls component', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/close gate/i);
        getByText(/lock gate/i);
    })
}); 