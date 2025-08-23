import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    fontFamily: {
      montserrat: ["var(--font-montserrat)", "sans-serif"],
      dm: ["var(--font-dm-sans)", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
