import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Running Test for Marbella Label", () => {
  test("Check Label is Visible", () => {
    render(<Label text="Label marbella" disabled />);
    expect(screen.getByText("Label marbella")).toBeVisible();
  });

  test("Check Label Background Color Changed when Disabled", () => {
    render(<Label text="Label marbella" disabled />);
    expect(screen.getByText("Label marbella")).toHaveStyle("background-color: #cccccc");
  });
});
