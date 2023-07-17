// import React from "react";
// import { Meta, StoryObj } from "@storybook/react";
// import Label from "./Label";
// import { LabelProps } from "./Label.types";

// const meta: Meta<typeof Label> = {
//   component: Label,
//   title: "Marbella/Button",
//   argTypes: {},
// };
// export default meta;

// type Story = StoryObj<typeof Label>;

// export const Primary: Story = (args:LabelProps) => (
//   <Label data-testId="InputField-id" {...args} />
// );
// Primary.args = {
//   primary: true,
//   disabled: false,
//   text: "Primary",

// };

// export const Secondary: Story = (args:LabelProps) => (
//   <Label data-testId="InputField-id" {...args} />
// );
// Secondary.args = {
//   primary: false,
//   disabled: false,
//   text: "Secondary",
// };

// export const Disabled: Story = (args:LabelProps) => (
//   <Label data-testId="InputField-id" {...args} />
// );
// Disabled.args = {
//   primary: false,
//   disabled: true,
//   text: "Disabled",

// };

// export const Small: Story = (args:LabelProps) => (
//   <Label data-testId="InputField-id" {...args} />
// );
// Small.args = {
//   primary: true,
//   disabled: false,
//   size: "small",
//   text: "Small",

// };

// export const Medium: Story = (args:LabelProps) => (
//   <Label data-testId="InputField-id" {...args} />
// );
// Medium.args = {
//   primary: true,
//   disabled: false,
//   size: "medium",
//   text: "Medium",

// };

// export const Large: Story = (args:LabelProps) => (
//   <Label data-testId="InputField-id" {...args} />
// );
// Large.args = {
//   primary: true,
//   disabled: false,
//   size: "large",
//   text: "Large",

// };
import React from "react";
import { Meta, Story } from "@storybook/react";
import Label from "./Label";

export default {
  component: Label,
  title: "Components/Label",
} as Meta;

const Template: Story<any> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Label",
  disabled: true,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  text: "Custom Style Label",
  style: { backgroundColor: "lightblue", color: "white" },
};

export const NoText = Template.bind({});
NoText.args = {
  disabled: true,
};
