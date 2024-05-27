import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dylan Rogers - Portfolio",
  description: "The official portfolio of Dylan Rogers, aka DylanRNow.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="favicon.ico" sizes="any" />
        {children}
      </body>
    </html>
  );
}
