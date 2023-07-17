import React from "react";
import styled from "styled-components";

interface LabelProps {
  text?: string;
  disabled?: boolean;
}

const StyledLabel = styled.label<LabelProps>`
  display: inline-block;
  padding: 8px;
  font-weight: bold;
  background-color: ${(props) => (props.disabled ? "#cccccc" : "transparent")};
`;

const Label: React.FC<LabelProps> = ({ text, disabled }) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};

export default Label;
