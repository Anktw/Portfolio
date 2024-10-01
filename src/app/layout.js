import HeaderComp from "./components/header";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./context/Themescontext";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const protestGuerrilla = localFont({
  src:"./fonts/ProtestGuerrilla.ttf",
  variable: "--font-protestGuerrilla",
});

export const metadata = {
  title: "Ankit Tiwari's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={protestGuerrilla.variable}>
      <body
        className={`pt-16 md:pt-20 lg:pt-20 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
        <HeaderComp/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
