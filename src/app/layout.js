

import { Inter } from "next/font/google";
import "./globals.css"; 
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {

  title: "trouve ton artisan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {


  return (
    <html lang="fr">
      <body className={inter.className}>
      <Header />
      <main className="min-h-screen flex flex-col">

       {children}

      </main>
      <Footer />
      </body>
    </html>
  );
}
