import ButtonPill from "@/components/ui/Button/ButtonPill";
import styles from "./Farewell.module.css";

export default function Farewell() {
    return (
        <section id="farewell" className={styles.farewell}>
            <div className={styles.container}>
                <h2 id="farewell-headline" className={`${styles.headline} headline-sh1`}>
                    ¡Nos emociona poder conocerte pronto!
                </h2>

                <div className={styles.content}>
                    <p className={`${styles.subheadline} headline-h5`}>
                        Aún estamos construyendo Looppah. Mientras tanto, te avisamos cuando lancemos.
                    </p>

                    <ButtonPill
                        label="¡Avísame cuando lancen!"
                        emphasis="Te notificaremos cuando esté listo."
                        variant="primary"
                    />
                    <ButtonPill
                        label="¡Avísame cuando lancen!"
                        emphasis="Te notificaremos cuando esté listo."
                        variant="dark"
                        asInput
                        placeholder="Escribe tu correo"
                        submitLabel="Enviar"
                        icon="/assets/icons/bell.svg"
                    />
                </div>
            </div>
        </section>
    );
}