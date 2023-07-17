import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: "Marbella/RadioButton",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Primary: Story = (args:RadioButtonProps) => (
  <RadioButton data-testId="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};

export const Secondary: Story = (args:RadioButtonProps) => (
  <RadioButton data-testId="InputField-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args:RadioButtonProps) => (
  <RadioButton data-testId="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args:RadioButtonProps) => (
  <RadioButton data-testId="InputField-id" {...args} />
);
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  text: "Small",
};

export const Medium: Story = (args:RadioButtonProps) => (
  <RadioButton data-testId="InputField-id" {...args} />
);
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args:RadioButtonProps) => (
  <RadioButton data-testId="InputField-id" {...args} />
);
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  text: "Large",
};