const COLORS = {
  primary: "#1bb285",
  secondary: "#2dbd94",
  tertiary: "#44c39f",
  quaternary: "#57c9a9",

  bgPrimary: '#1bb285',
  bgSecondary: '#09b4c1',

  black: "#000",
  gray: "#4c4c4c",
  gray2: "#C1C0C8",

  white: "#F3F4F8",
  lightWhite: "#FAFAFC",

  lightPrimary: "#f2f2f2",
  lightSecondary: "#f8f8f8",

  darkPrimary: "#222831",
  darkSecondary: "#31363F",

  lightText: "#fff",
  darkText: "#4c4c4c"
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
