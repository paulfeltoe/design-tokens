/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.stories.@(js|jsx)"],
  addons: ["@storybook/addon-themes", "@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/react-vite",
};
export default config;
