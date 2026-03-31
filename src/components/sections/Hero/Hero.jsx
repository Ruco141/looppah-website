"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ButtonPill from "../../ui/Button/ButtonPill";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.content}>
                <Image
                    className={styles.contentBg}
                    src="/assets/illustrations/juan_maria.png"
                    alt=""
                    fill
                    sizes="100vw"
                    quality={90}
                    priority
                />

                <div className={styles.headline}>
                    <h1 className="headline-h1">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
                            className={styles.h1Blue}
                        >
                            Crear con otras personas{" "}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                            className={styles.h1Dark}
                        >
                            no debería ser tan difícil
                        </motion.span>
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                    className={styles.subheadline}
                >
                    <p className={`${styles.subtitle} headline-h5`}>
                        Looppah es donde publicas lo que estás construyendo, encuentras colaboradores y
                        armas el equipo correcto para hacerlo realidad.
                    </p>

                    <ButtonPill
                        variant="dark"
                        label="Mira como funciona"
                        emphasis="Cualquiera que sea tu proyecto, aquí encontraras al equipo."
                        onClick={() => document.getElementById("howitworks")?.scrollIntoView({ behavior: "smooth" })}
                    />
                </motion.div>
            </div>
        </section>
    );
}