"use client";

import Image from "next/image";
import { motion } from "motion/react";
import ButtonPill from "../../ui/Button/ButtonPill";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.content}>
                <Image
                    className={styles.contentBg}
                    alt=""
                    fill
                    quality={90}
                    sizes="100vw"
                    src="/assets/illustrations/juan_maria.png"
                    priority
                />

                <div className={styles.headline}>
                    <h1 className="headline-h1">
                        <motion.span
                            className={styles.h1Blue}
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
                        >
                            Crear con otras personas{" "}
                        </motion.span>
                        <motion.span
                            className={styles.h1Dark}
                            animate={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                        >
                            no debería ser tan difícil
                        </motion.span>
                    </h1>
                </div>

                <motion.div
                    className={styles.subheadline}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                >
                    <p className={`${styles.subtitle} headline-h5`}>
                        Looppah es donde publicas lo que estás construyendo, encuentras colaboradores y
                        armas el equipo correcto para hacerlo realidad.
                    </p>

                    <ButtonPill
                        emphasis="Cualquiera que sea tu proyecto, aquí encontraras al equipo."
                        label="Mira como funciona"
                        variant="dark"
                        onClick={() => document.getElementById("howitworks")?.scrollIntoView({ behavior: "smooth" })}
                    />
                </motion.div>
            </div>
        </section>
    );
}