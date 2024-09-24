import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Golvalliansen i Väst AB",
  description:
    "Mattläggning, Golvläggning, Parkettslipning, Våtrumssertifierade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
