import { MouseEventHandler } from "react";

export interface RadioButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;}