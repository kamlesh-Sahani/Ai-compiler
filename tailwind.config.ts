import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSlate: '#181818',  
        pinky: '#ff477e',
        hara:'#033888',
        lightText:'#eee',
      },
    },
  },
  plugins: [],
};
export default config;
