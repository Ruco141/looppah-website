"use client";

import { useRef } from "react";
import Image from "next/image";
import ForYouSlideCard from "./ForYouSlideCard";
import styles from "./ForYou.module.css";

const cards = [
    {
        sender: {
            name: "Valeria | Diseño de Modas",
            avatar: "/assets/avatars/valeria.png",
            message:
                "Tengo una marca de ropa lista para lanzar. Necesito a alguien que me ayude con la marca y el e-commerce.",
        },
        receiver: {
            name: "Ángel | Desarrollo Web",
            avatar: "/assets/avatars/angel.png",
            message:
                "Llevo unos años haciendo tiendas en Shopify. ¿Tienes alguna maqueta o boceto?",
        },
    },
    {
        sender: {
            name: "Emilio | Fotografía",
            avatar: "/assets/avatars/emilio.png",
            message:
                "Quiero hacer una exposición fotográfica del centro histórico, necesito ayuda en el montaje.",
        },
        receiver: {
            name: "Natalia | Diseño de Interiores",
            avatar: "/assets/avatars/natalia.png",
            message:
                "He montado algunas expos en la uni, te ayudo con el layout.",
        },
    },
    {
        sender: {
            name: "Camila | Biología",
            avatar: "/assets/avatars/camila.png",
            message:
                "Estoy investigando microplásticos en cenotes de Yucatán. Busco alguien que me ayude a visualizar los datos.",
        },
        receiver: {
            name: "Jorge | Ciencia de Datos",
            avatar: "/assets/avatars/jorge.png",
            message:
                "Trabajo con datos geoespaciales. Veamos qué podemos hacer.",
        },
    },
    {
        sender: {
            name: "Sarah | Psicología",
            avatar: "/assets/avatars/sarah.png",
            message:
                "Quiero crear un podcast sobre salud mental para universitarios. No sé nada de producción de audio.",
        },
        receiver: {
            name: "Alberto | Comunicación",
            avatar: "/assets/avatars/alberto.png",
            message:
                "Produzco podcasts desde segundo semestre. ¿Ya tienes el concepto o lo desarrollamos juntos?",
        },
    },
    {
        sender: {
            name: "Andrés | Administración",
            avatar: "/assets/avatars/andres.png",
            message:
                "Tengo la idea y el modelo de negocio para una app de logística local. Busco cofundador técnico.",
        },
        receiver: {
            name: "Fernanda | Ingeniería TI",
            avatar: "/assets/avatars/fernanda.png",
            message:
                "Me interesan los problemas de última milla. ¿Podemos agendar una llamada esta semana?",
        },
    },
];

export default function ForYou() {
    const trackRef = useRef(null);

    const moveByCard = (direction) => {
        const track = trackRef.current;
        if (!track) return;

        const firstCard = track.firstElementChild;
        if (!firstCard) return;

        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const step = firstCard.offsetWidth + gap;

        track.scrollBy({ left: step * direction, behavior: "smooth" });
    };

    return (
        <section className={styles.foryou} aria-labelledby="foryou-headline">
            <div className={styles.container}>
                <div className={styles.bg}>
                    <Image
                        className={styles.bgImage}
                        src="/assets/illustrations/campus.png"
                        alt=""
                        aria-hidden="true"
                        fill
                        sizes="100vw"
                        quality={90}
                    />
                </div>

                <h2 id="foryou-headline" className={`${styles.headline} headline-h3`}>
                    Es para ti si eres como ellos
                </h2>

                <div ref={trackRef} className={styles.track}>
                    {cards.map((card) => (
                        <ForYouSlideCard
                            key={`${card.sender.name}-${card.receiver.name}`}
                            sender={card.sender}
                            receiver={card.receiver}
                        />
                    ))}
                </div>

                <div className={styles.controls} aria-label="Navegación de tarjetas">
                    <button
                        className={styles.control}
                        type="button"
                        onClick={() => moveByCard(-1)}
                        aria-label="Tarjeta anterior"
                    >
                        <Image src="/assets/icons/chevron_left.svg" alt="" width={20} height={20} />
                    </button>

                    <button
                        className={styles.control}
                        type="button"
                        onClick={() => moveByCard(1)}
                        aria-label="Siguiente tarjeta"
                    >
                        <Image src="/assets/icons/chevron_right.svg" alt="" width={20} height={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}