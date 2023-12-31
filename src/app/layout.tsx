import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ContextApiProvider } from "@/contexts/ContextApi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Piece",
  description: "Semana do Zero ao Programador Contratado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="sm:overflow-hidden bg-black text-white">
        <ContextApiProvider>{children}</ContextApiProvider>
      </body>
    </html>
  );
}
