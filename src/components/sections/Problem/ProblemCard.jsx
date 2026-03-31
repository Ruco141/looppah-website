"use client";

import Image from "next/image";
import { motion } from "motion/react";
import BackdropBlur from "@/components/ui/effects/BackdropBlur";
import styles from "./ProblemCard.module.css";

export default function ProblemCard({ title, segments, image, imageAlt }) {
    return (
        <motion.article
            className={styles.card}
            transition={{ duration: 0.2, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.03 }}
        >
            <div aria-hidden="true" className={styles.bg}>
                <Image
                    className={styles.bgImage}
                    alt={imageAlt || ""}
                    fill
                    quality={90}
                    sizes="(min-width: 80rem) 33vw, (min-width: 40rem) 50vw, 100vw"
                    src={image}
                />
            </div>

            <BackdropBlur className={styles.content} blur="10px">
                <h3 className="headline-h4">{title}</h3>
                <p className="body-base">
                    {segments.map((segment, index) =>
                        segment.emphasis ? (
                            <em className={styles.emphasis} key={`${title}-${index}`}>
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