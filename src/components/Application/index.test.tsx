import { render } from "@testing-library/react";
import React from "react";
import Application from ".";

it("renders signup page heading", () => {
  const { getByText } = render(<Application />);
  const heading = getByText(/signup/i, {
    selector: "h1"
  });
  expect(heading).toBeInTheDocument();
});
