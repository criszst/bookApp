import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    primary: "#3c364c",
    secondary: "#1a1d24",

    black: "#171921",
    white: "#FFFFFF",
    lightGray: "#64676D",
    lightGray2: "#EFEFF0",
    lightGray3: '#D4D5D6',
    lightGray4: '#7D7E84',
    gray: "#2D3038",
    gray1: "#282C35",
    darkRed: "#31262F",
    lightRed: "#C5505E",
    darkBlue: "#22273B",
    lightBlue: "#424BAF",
    darkGreen: "#213432",
    lightGreen: "#31Ad66",

};

export const SIZES = {
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 18,
    h4: 16,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 13,

    // dimensions
    width,
    height
};


export const FONTS = {
    largeTitle: { fontFamily: "Roboto-Regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 20 },
    body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 17 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;