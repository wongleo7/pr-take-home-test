import "./globals.css";
import { Inter } from "next/font/google";
import { BsGithub } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modulo Three",
  description: "Calculates Modulo 3 with a Finite State Machine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full flex justify-end pr-5 mt-3">
          <a
            className="flex justify-center"
            href="https://github.com/wongleo7/pr-take-home-test"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="text-2xl mr-1" />
            <h1 className="text-sm font-bold text-center ">github repo</h1>
          </a>
        </div>
        <div className="w-full flex justify-end pr-5 text-sm">by wongleo7</div>
        {children}
      </body>
    </html>
  );
}
