import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Calculadora IMC",
  description: "Calculadora pra calculo de IMC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="bg-gray-200 min-h-screen flex flex-col gap-10 items-center">
          <nav className="w-full bg-white h-20 flex justify-center items-center">
            <section className="flex items-center gap-3">
              <h1 className="font-bold text-3xl">Calculadora IMC</h1>
            </section>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
