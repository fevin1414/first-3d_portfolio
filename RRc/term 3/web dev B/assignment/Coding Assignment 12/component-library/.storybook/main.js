const baseConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  ...baseConfig,
  stories: ["../src/**/*.mdx", ...baseConfig.stories],
  addons: [
    ...baseConfig.addons,
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],
};

export default config;
