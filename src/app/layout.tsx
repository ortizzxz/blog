import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";


export const metadata: Metadata = {
  title: "Blog de Jesus",
  description: "Blog creado para compartir apuntes de Ingenieria Informatica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
