import styles from "./Ticker.module.css";

const items = [
    { label: "Cultura",        src: "/assets/media/cultura.svg" },
    { label: "Impacto social", src: "/assets/media/impacto_social.svg" },
    { label: "Emprendimiento", src: "/assets/media/emprendimiento.svg" },
    { label: "Investigación",  src: "/assets/media/investigacion.svg" },
    { label: "Arte",           src: "/assets/media/arte.svg" },
];

export default function Ticker() {
    return (
        <div aria-hidden="true" className={styles.ticker} id="ticker">
            <div className={styles.track}>
                {[...items, ...items].map((item, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        className={styles.item}
                        key={`${item.label}-${i}`}
                        alt={item.label}
                        src={item.src}
                    />
                ))}
            </div>
        </div>
    );
}