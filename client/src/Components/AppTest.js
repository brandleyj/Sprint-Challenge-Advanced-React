import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

test("renders without crashing", () => {
	render(<App />);
});

test("Title Found", () => {
	const { getByText } = render(<App />);

	getByText(/Women's World Cup Players/i);
});

test("navBar ID Found", () => {
	const { getByTestId } = render(<App />);

	getByTestId(/navBar/i);
});
