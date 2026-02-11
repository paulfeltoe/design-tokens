import { withThemeByClassName } from "@storybook/addon-themes";
import "../v0/globals.css";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    layout: "padded",
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
