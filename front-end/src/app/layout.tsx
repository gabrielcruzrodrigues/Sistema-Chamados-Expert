import type { Metadata } from "next";
import "./global.module.sass";
import { Poppins } from "next/font/google";
// import Header from "./Components/header/page";
import NewCall from "./newCall/page";
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Expt | Sistema de chamados",
  description: "Sistema de chamados ao suporte do Expert",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="html">
      <head></head>
      <NewCall />
      <body className={`${poppins}`}>{children}</body>
    </html>
  );
}
