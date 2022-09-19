const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.vue"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        DEFAULT: "#202124",

        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
        "brand-gray-4": "#3c4043",
        "brand-gray-5": "#5f6368",
        "brand-gray-6": "#bdc1c6",

        "brand-black-1": "#202124",

        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-blue-3": "#185abc",

        "brand-green-1": "#21BA45",
      },
    },

    backgroundImage: {
      "image-gradient":
        "-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.6)),color-stop(50%,rgba(0,0,0,.4)),color-stop(75%,transparent))",
      "gray-gradient": "linear-gradient(180deg, transparent 37%, #e8eaed 0)",
    },

    boxShadow: {
      gray: "0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%)",
      "gray-2":
        "0 12px 24px rgb(0 0 0 / 5%), 0 1px 2px rgb(60 64 67 / 30%), 0 1px 3px rgb(60 64 67 / 15%)",
      "gray-3":
        "0 12px 24px rgb(0 0 0 / 5%), 0 1px 6px rgb(60 64 67 / 30%), 0 1px 5px rgb(60 64 67 / 15%)",
      "gray-4": "0 2px 4px rgb(0 0 0 / 11%)",
    },
  },

  variants: {
    extend: {
      margin: ["first"],
    },
  },

  plugins: [],
};
