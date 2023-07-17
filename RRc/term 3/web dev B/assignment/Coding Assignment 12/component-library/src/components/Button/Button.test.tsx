import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import Button from "./Button";

describe("Running Test for Marbella Button", () => {

  test("Check Button is Visible", () => {
    render(<Button text="Button marbella" disabled/>)
    expect(screen.getByRole('button',{name:"Button marbella"})).toBeVisible;
  });

  test("Check Button Background Color Changed when Disabled", () => {
    render(<Button text="Button marbella" disabled/>)
    expect(screen.getByRole('button',{name:"Button marbella"})).toHaveStyle("backgroundColor:#cccccc" );
  });
});