import React from "react";

import { TextProps } from "./Text.types";

const Text = (props: TextProps) => {
  return <label>{props.text}</label>;
};

export default Text;