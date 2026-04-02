import ButtonPill from "@/components/ui/Button/ButtonPill";
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
                    <ButtonPill
                        asInput
                        emphasis="Te notificaremos cuando esté listo."
                        label="¡Avísame cuando lancen!"
                        submitLabel="Enviar"
                        variant="primary"
                        icon="/assets/icons/bell.svg"
                        placeholder="Escribe tu correo"
                    />
                </div>
            </div>
        </section>
    );
}