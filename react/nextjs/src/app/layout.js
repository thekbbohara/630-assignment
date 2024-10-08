import { Inter } from "next/font/google";
import "./globals.css";

import ReduxProvider from "@/redux/reduxProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={inter.className + " bg-[#1e1e2e] text-[#cdd6f4]"}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
