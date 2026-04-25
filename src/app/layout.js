import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navber/Navbar";
import Footer from "@/Components/Shared/Footer/Footer";
import { ProvidersTheme } from "@/ThemeProvider/ThemeProvider";
import { ToastContainer } from "react-toastify";
import ContextProvider from "@/context/ContextProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home page",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ContextProvider>
          <ProvidersTheme>
            <Navbar></Navbar>
            <main className="grow bg-neutral-100 dark:bg-black/50">
              {children}
            </main>
            <ToastContainer position="top-center" />
            <Footer></Footer>
          </ProvidersTheme>
        </ContextProvider>
      </body>
    </html>
  );
}
