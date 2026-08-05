import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import CartDrawer from "./components/CartDrawer";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MiniCart",
  description: "Online shopping website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="px-0 md:px-14">
        <div className="bg-white px-5 pb-5 md:px-10 rounded-xl md:pb-10 md:rounded-2xl min-h-screen">
          <AuthProvider>
            <CartProvider>
              <Toaster position="top-right" />
              <Navbar />
              <CartDrawer />
              {children}
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
