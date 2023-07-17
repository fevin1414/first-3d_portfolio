import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import RadioButton from "./RadioButton";

describe("Running Test for Marbella RadioButton", () => {

  test("Check RadioButton is Visible", () => {
    render(<RadioButton text="Radio Button marbella" disabled/>)
    expect(screen.getByRole('button',{name:"Radio Button marbella"})).toBeVisible();
  });

  test("Check Button Background Color Changed when Disabled", () => {
    render(<RadioButton text="Radio Button marbella" disabled/>)
    expect(screen.getByRole('button',{name:"Radio Button marbella"})).toHaveStyle("backgroundColor:#cccccc" );
  });
});