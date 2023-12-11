import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PulsePoint",
  description: "Your personal Wellness tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" h-full">
      <body className={inter.className}>
        <div className="bg-[#070B0D] p-5">{children}</div>
      </body>
    </html>
  );
}
