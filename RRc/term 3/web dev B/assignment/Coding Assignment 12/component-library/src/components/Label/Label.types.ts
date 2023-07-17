import { MouseEventHandler } from "react";

export interface LabelProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
}