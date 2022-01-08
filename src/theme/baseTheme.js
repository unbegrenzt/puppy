import colors from "./colors";

const sharedPreferences = {
  splash: {
    backgroundColor: colors.secondary.c40,
  },
}

const baseTheme = {
  dark: {
    splash: sharedPreferences.splash
  },
  light: {
    splash: {
      backgroundColor: colors.primary.c40,
    },
  },
};

export default baseTheme;
