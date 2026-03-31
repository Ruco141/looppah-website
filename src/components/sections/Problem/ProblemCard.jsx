"use client";

import Image from "next/image";
import { motion } from "motion/react";
import BackdropBlur from "@/components/ui/effects/BackdropBlur";
import styles from "./ProblemCard.module.css";

export default function ProblemCard({ title, segments, image, imageAlt }) {
    return (
        <motion.article
            className={styles.card}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <div className={styles.bg} aria-hidden="true">
                <Image
                    className={styles.bgImage}
                    src={image}
                    alt={imageAlt || ""}
                    fill
                    sizes="(min-width: 80rem) 33vw, (min-width: 40rem) 50vw, 100vw"
                    quality={90}
                />
            </div>

            <BackdropBlur blur="10px" className={styles.content}>
                <h3 className="headline-h4">{title}</h3>
                <p className="body-base">
                    {segments.map((segment, index) =>
                        segment.emphasis ? (
                            <em key={`${title}-${index}`} className={styles.emphasis}>
                                {segment.text}
                            </em>
                        ) : (
                            <span key={`${title}-${index}`}>{segment.text}</span>
                        )
                    )}
                </p>
            </BackdropBlur>
        </motion.article>
    );
}