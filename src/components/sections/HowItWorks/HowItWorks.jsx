"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import HowItWorksBlock from "./HowItWorksBlock";
import styles from "./HowItWorks.module.css";

const blocks = [
    {
        title: "Publica lo que necesites",
        description:
            "Publica en una comunidad específica o a todo el mundo. Desde algo pequeño hasta una oportunidad de proyecto. Alguien tiene lo que necesitas.",
        tags: [
            { label: "Llega a todos", icon: "/assets/icons/megaphone.svg" },
            { label: "Conexión directa", icon: "/assets/icons/old_key.svg" },
        ],
        image: "/assets/media/mockup_a.png",
    },
    {
        title: "Crea el hogar de tu proyecto",
        description:
            "Crea un perfil para tu startup, investigación o iniciativa. Construye tu equipo, comparte avances y crece públicamente.",
        tags: [
            { label: "Gana visibilidad", icon: "/assets/icons/eye_in_bubble.svg" },
            { label: "Construye comunidad", icon: "/assets/icons/globe.svg" },
        ],
        image: "/assets/media/mockup_b.png",
    },
    {
        title: "Construye tu reputación",
        description:
            "Lo que aportas cuenta. Tu historial registra proyectos, colaboraciones y contribuciones.",
        tags: [
            { label: "Obtén experiencia", icon: "/assets/icons/brain.svg" },
            { label: "Abre oportunidades", icon: "/assets/icons/old_key.svg" },
        ],
        image: "/assets/media/mockup_c.png",
    },
];

const TOTAL = blocks.length;

/* ——— Configuración de animación del stack (desktop) ——————— */
const HIW_CONFIG = {
    BREAKPOINT_DESKTOP: 1280,
    STACK_BASE_TOP: 88,       /* px desde el top del contenedor sticky */
    STACK_STEP: 28,            /* px de separación vertical entre cards */
    STACK_EXIT_START: 0.88,    /* progreso de scroll donde inicia el exit */
    STACK_EXIT_DISTANCE: 56,   /* px que sube el stack al salir */
    STACK_SCALE_STEP: 0.06,    /* reducción de escala por cada card detrás */
    STACK_MIN_SCALE: 0.82,     /* escala mínima de la card más al fondo */
};

/* ─── Spring configs ─────────────────────────────────────── */
const SCALE_SPRING = { stiffness: 280, damping: 34, mass: 0.45 };
const EXIT_SPRING = { stiffness: 240, damping: 36, mass: 0.5 };

function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(`(min-width: ${HIW_CONFIG.BREAKPOINT_DESKTOP}px)`);
        const onChange = () => setIsDesktop(media.matches);

        onChange();
        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    return isDesktop;
}

function getTargetScale(index, total) {
    if (index === total - 1) return 1;

    return Math.max(
        HIW_CONFIG.STACK_MIN_SCALE,
        1 - (total - index - 1) * HIW_CONFIG.STACK_SCALE_STEP
    );
}

/* ─── AnimatedBlock ──────────────────────────────────────── */
function AnimatedBlock({ block, index, isDesktop, scrollYProgress, exitY, setCardRef }) {
    const targetScale = getTargetScale(index, TOTAL);

    /* Rango de scroll en el que esta card se encoge */
    const start = (index + 0.15) / TOTAL;
    const end = Math.min(1, start + 0.25);

    const scaleProgress = useTransform(scrollYProgress, [start, end], [1, targetScale], {
        clamp: true,
    });

    const scale = useSpring(scaleProgress, SCALE_SPRING);

    return (
        <div
            ref={(node) => setCardRef(index, node)}
            className={styles.blockWrapper}
            style={{
                top: isDesktop
                    ? `${HIW_CONFIG.STACK_BASE_TOP + index * HIW_CONFIG.STACK_STEP}px`
                    : undefined,
                zIndex: index + 1,
            }}
        >
            <motion.div
                className={isDesktop ? styles.stackAnimated : undefined}
                style={{
                    scale: isDesktop ? scale : 1,
                    y: isDesktop ? exitY : 0,
                }}
            >
                <HowItWorksBlock
                    title={block.title}
                    description={block.description}
                    tags={block.tags}
                    image={block.image}
                />
            </motion.div>
        </div>
    );
}

/* ─── HowItWorks ─────────────────────────────────────────── */
export default function HowItWorks() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const cardRefs = useRef([]);
    const isDesktop = useIsDesktop();
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    /* Desplazamiento vertical del stack al acercarse al final del scroll */
    const exitYProgress = useTransform(
        scrollYProgress,
        [HIW_CONFIG.STACK_EXIT_START, 1],
        [0, -HIW_CONFIG.STACK_EXIT_DISTANCE],
        { clamp: true }
    );

    const exitY = useSpring(exitYProgress, EXIT_SPRING);

    const setCardRef = (index, node) => {
        cardRefs.current[index] = node;
    };

    /* Carrusel mobile: detecta qué card está más cerca del borde izquierdo */
    useEffect(() => {
        if (isDesktop) return;

        const track = trackRef.current;
        if (!track) return;

        const updateActive = () => {
            const currentLeft = track.scrollLeft;
            let nearest = 0;
            let minDistance = Number.POSITIVE_INFINITY;

            cardRefs.current.forEach((card, idx) => {
                if (!card) return;
                const distance = Math.abs(card.offsetLeft - currentLeft);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearest = idx;
                }
            });

            setActiveIndex(nearest);
        };

        updateActive();
        track.addEventListener("scroll", updateActive, { passive: true });

        return () => track.removeEventListener("scroll", updateActive);
    }, [isDesktop]);

    /* Resetea el carrusel al volver de desktop a mobile */
    useEffect(() => {
        if (!isDesktop) {
            queueMicrotask(() => setActiveIndex(0));
            trackRef.current?.scrollTo({ left: 0, behavior: "auto" });
        }
    }, [isDesktop]);

    return (
        <section id="howitworks" ref={sectionRef} className={styles.howitworks} aria-labelledby="hiw-headline">
            <div className={styles.headline}>
                <h2 id="hiw-headline" className={`headline-h3 ${styles.headlineTitle}`}>
                    Así se crean conexiones
                </h2>
            </div>

            <div
                ref={trackRef}
                className={`${styles.blocks} ${!isDesktop ? styles.carouselTrack : ""}`}
                aria-label="Bloques de funcionamiento"
            >
                {blocks.map((block, index) => (
                    <AnimatedBlock
                        key={block.title}
                        block={block}
                        index={index}
                        isDesktop={isDesktop}
                        scrollYProgress={scrollYProgress}
                        exitY={exitY}
                        setCardRef={setCardRef}
                    />
                ))}
            </div>

            {!isDesktop && (
                <div className={styles.dots} aria-hidden="true">
                    {blocks.map((block, index) => (
                        <span
                            key={block.title}
                            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}