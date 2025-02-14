import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function UserLayout({ children }) {
  return (
    <main className={inter.className}>
        <Navbar />
        {children}
        <Footer />
    </main>
  );
}
