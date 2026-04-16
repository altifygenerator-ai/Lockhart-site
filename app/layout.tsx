import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Oswald, Playfair_Display } from "next/font/google";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Oswald({
  subsets: ["latin"],
  variable: "--font-body",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>

        {/* HEADER ALWAYS HERE */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="pt-[80px]">
          {children}
        </main>

        {/* FOOTER ALWAYS HERE */}
        <Footer />

      </body>
    </html>
  );
}