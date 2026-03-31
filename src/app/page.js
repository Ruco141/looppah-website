import FadeIn from "@/components/ui/effects/FadeIn";
import Hero from "@/components/sections/Hero/Hero";
import Ticker from "@/components/sections/Ticker/Ticker";
import Problem from "@/components/sections/Problem/Problem";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Bridge from "@/components/sections/Bridge/Bridge";
import ForYou from "@/components/sections/ForYou/ForYou";
import Farewell from "@/components/sections/Farewell/Farewell";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Hero />
            <Ticker />
            <FadeIn>
                <Problem />
            </FadeIn>
            <HowItWorks />
            <FadeIn>
                <Bridge />
            </FadeIn>
            <ForYou />
            <FadeIn>
                <Farewell />
            </FadeIn>
        </main>
    );
}