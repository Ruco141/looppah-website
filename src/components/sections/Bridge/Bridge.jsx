import styles from "./Bridge.module.css";

export default function Bridge() {
    return (
        <section className={styles.bridge} id="bridge">
            <div className={styles.content}>
                <h2 className={`${styles.title} headline-sh1`}>
                    El equipo que necesitas para tu proyecto todavía no te conoce
                </h2>
                <p className={`${styles.subtitle} headline-h4`}>
                    En Looppah esas personas te encuentran a ti. Y todo lo que construyen juntos queda registrado como experiencia que habla por ti.
                </p>
            </div>
        </section>
    );
}