import {
  Inter,
  Roboto,
  Chakra_Petch,
  Manrope,
  Be_Vietnam_Pro,
} from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
// import {} from "./TTCommons/";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const chakra = Chakra_Petch({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-chakra_petch",
});
const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});
const beVietNam = Be_Vietnam_Pro({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-beVietNam",
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const ttCommonsFont = LocalFont({
  src: [
    {
      path: "./TTCommons/TT_Commons_Thin.otf",
      weight: "100",
    },
    {
      path: "./TTCommons/TT_Commons_Regular.otf",
      weight: "400",
    },
    {
      path: "./TTCommons/TT_Commons_Medium.otf",
      weight: "500",
    },
    {
      path: "./TTCommons/TT_Commons_Bold.otf",
      weight: "700",
    },
    {
      path: "./TTCommons/TT_Commons_ExtraBold.otf",
      weight: "800",
    },
    {
      path: "./TTCommons/TT_Commons_Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-tt_commons",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${inter.variable} ${chakra.variable} ${manrope.variable} ${beVietNam.variable}`}
      >
        {/* <Header></Header> */}
        {children}
      </body>
    </html>
  );
}