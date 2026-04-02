import WaitlistPill from "@/components/ui/Button/WaitlistPill";
import styles from "./Farewell.module.css";

export default function Farewell() {
    return (
        <section className={styles.farewell} id="farewell">
            <div className={styles.container}>
                <h2 className={`${styles.headline} headline-sh1`} id="farewell-headline">
                    ¡Nos emociona poder conocerte pronto!
                </h2>

                <div className={styles.content}>
                    <p className={`${styles.subheadline} headline-h5`}>
                        Aún estamos construyendo Looppah. Mientras tanto, te avisamos cuando lancemos.
                    </p>
                    <WaitlistPill />
                </div>
            </div>
        </section>
    );
}