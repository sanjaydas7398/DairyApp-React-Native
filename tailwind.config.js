

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: ["PoppinsLight"],
        poppinsRegular: ["PoppinsRegular"],
        poppinsMedium: ["PoppinsMedium"],
        poppinsSemiBold: ["PoppinsSemiBold"],
        poppinsBold: ["PoppinsBold"],
        poppinsExtraBold: ["PoppinsExtraBold"],
      },
      colors: {
        PrimaryColor: "#D11D1D", 
        SecondaryColor:"", 
        BlackColor:"#000000",
        SoftColor:"#969696",
        whiteColor: "#FFFFFF",
        TBBackgroundColor: "#EEEEEE",
        
      },
    },
  },
  plugins: [],
};
