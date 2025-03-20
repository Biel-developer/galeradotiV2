import "./globals.css";
import { Header } from "../components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main style={{ paddingTop: "60px" }}>{children}</main> 
      </body>
    </html>
  );
}
