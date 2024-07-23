import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pri":{
          "50" : "#8ECAE6",
          "100" : "#219EBC",
          "200" : "#023047" ,
          "300" : "#FFB703" ,
          "400" : "#FB8500",
        },
        "new":{
          "new1" : "#EEEEEE"
        }
      },
    },
  },
  plugins: [],
};
export default config;
