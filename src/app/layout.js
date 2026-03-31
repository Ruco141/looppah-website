import "./globals.css";
import styles from "./layout.module.css";
import { Alexandria, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights} from "@vercel/speed-insights/next";
import PageTransition from "@/components/ui/effects/PageTransition";
import Navbar from "@/components/ui/NavBar/NavBar";
import Footer from "@/components/sections/Footer/Footer";

const alexandria = Alexandria({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sans",
    display: "swap",
});

const sourceSerif = Source_Serif_4({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
    variable: "--font-serif",
    display: "swap",
});

export const metadata = {
    title: "Looppah",
    description: "Encuentra las personas correctas para tu próximo proyecto",
    icons: { icon: "/assets/brand/looppah_isotipo.svg" },
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    themeColor: "#f2f5ff",
};

export default function RootLayout({ children }) {
    return (
        <html className={`${alexandria.variable} ${sourceSerif.variable}`} lang="es">
        <body>
        <div className={styles.page}>
            <div className={styles.navbarWrap}>
                <Navbar />
            </div>
            <PageTransition>
                {children}
            </PageTransition>
            <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}