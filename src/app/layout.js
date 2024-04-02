"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Resume Maker",
  description: "Resume Maker Application",
};

export default function RootLayout({ children }) {
  const targetPath = usePathname();

  const headerAndFooter = ![
    "/dashboard",
    "/dashboard/resumes",
    "/dashboard/cover-letters",
    "/dashboard/jobs",
    "/dashboard/applications",
    "/dashboard/edit-resume",
  ].includes(targetPath);
  return (
    <html lang="en">
      <body className={inter.className}>
        {headerAndFooter ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
