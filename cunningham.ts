import { defaultThemes } from "@openfun/cunningham-tokens";

const defaultConfig = {
  themes: {
    globals: {
      colors: {
        "brand-500": "purple",
      },
    },
    components: {
      button: {
        "border-radius": "100px",
      },
    },
  },
};

const config = { ...defaultConfig, ...defaultThemes };
export default config;