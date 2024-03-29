import { Inter } from "next/font/google";
import "./globals.css";
import Header from "app/components/header";
import Footer from "app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Stoik",
    description: "Mental Health",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} max-w-screen`}>
                {" "}
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
