import { Montserrat, DM_Sans } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-montserrat",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-dm-sans",
});
