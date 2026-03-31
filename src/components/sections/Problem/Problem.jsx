import ProblemCard from "./ProblemCard";
import styles from "./Problem.module.css";

const cards = [
    {
        title: "Talento aislado",
        segments: [
            { text: "Colaboras solo con tu círculo cercano, perdiendo talento complementario que está " },
            { text: "más cerca de lo que crees.", emphasis: true },
        ],
        image: "/assets/illustrations/talento_aislado.png",
        imageAlt: "Tres estudiantes en grupo pero separados",
    },
    {
        title: "Búsqueda a ciegas",
        segments: [
            { text: "Buscas en todos lados esperando tener suerte. " },
            { text: "No existe un lugar diseñado para esto.", emphasis: true },
        ],
        image: "/assets/illustrations/busqueda_a_ciegas.png",
        imageAlt: "Estudiante con venda en los ojos buscando puertas",
    },
    {
        title: "Ideas sin despegar",
        segments: [
            { text: "Tu mejor idea sigue en tu cabeza porque " },
            { text: "no encontraste al equipo", emphasis: true },
            { text: " para ejecutarla." },
        ],
        image: "/assets/illustrations/ideas_sin_despegar.png",
        imageAlt: "Estudiante con un cohete pequeño en la mano",
    },
];

export default function Problem() {
    return (
        <section className={styles.problem} aria-labelledby="problem-headline">
            <div className={styles.headline}>
                <h2 className={`headline-h3 ${styles.headlineTitle}`} id="problem-headline">
                    Esto te ha pasado
                </h2>
            </div>

            <div className={styles.cards}>
                {cards.map((card) => (
                    <ProblemCard
                        key={card.title}
                        image={card.image}
                        imageAlt={card.imageAlt}
                        segments={card.segments}
                        title={card.title}
                    />
                ))}
            </div>

            <div className={styles.subheadline}>
                <p className={`headline-sh2 ${styles.subheadlineText}`}>
                    Por esto existe Looppah. Una <span className={styles.accent}>red social</span> diseñada
                    específicamente para <span className={styles.accent}>colaboración</span> en proyectos
                    early-stage.
                </p>
            </div>
        </section>
    );
}
