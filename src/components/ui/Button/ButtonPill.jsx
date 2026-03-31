"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import styles from "./ButtonPill.module.css";

export default function ButtonPill({
                                       variant,
                                       label,
                                       emphasis,
                                       onClick,

                                       asInput = false,
                                       placeholder,
                                       submitLabel,
                                       icon,
                                       onSubmit,
                                   }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [email, setEmail] = useState("");

    const handleExpand = () => {
        if (asInput) {
            setIsExpanded(true);
        } else if (onClick) {
            onClick();
        }
    };

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(email);
        }
        setEmail("");
        setIsExpanded(false);
    };

    // Spring config - más damping que NavBar para compensar cambio de tamaño
    const springTransition = {
        type: "spring",
        stiffness: 150,
        damping: 25,  // Mayor que NavBar (20) para menos rebote
    };

    // ─── Modo CTA ─────────────────────────────────────────
    if (asInput) {
        return (
            <motion.form
                className={`${styles.pillExpanded} body-small`}
                onSubmit={handleSubmit}
                layout
                transition={springTransition}
            >
                <AnimatePresence mode="popLayout">
                    {isExpanded && (
                        <motion.input
                            key="input"
                            type="email"
                            placeholder={placeholder}
                            value={email}
                            onChange={handleInputChange}
                            required
                            autoFocus
                            className={styles.input}
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={springTransition}
                            layout
                        />
                    )}
                </AnimatePresence>

                <motion.div
                    layout="position"  // Solo anima posición, no tamaño
                    transition={springTransition}
                >
                    <Button
                        type={isExpanded ? "submit" : "button"}
                        variant={variant}
                        onClick={!isExpanded ? handleExpand : undefined}
                    >
                        {isExpanded ? (
                            <>
                                <span className={styles.submitText}>{submitLabel}</span>
                                <span className={styles.submitIcon}>
                                    <Image
                                        src={icon}
                                        alt=""
                                        aria-hidden="true"
                                        width={16}
                                        height={16}
                                    />
                                </span>
                            </>
                        ) : (
                            label
                        )}
                    </Button>
                </motion.div>

                <AnimatePresence mode="popLayout">
                    {!isExpanded && (
                        <motion.span
                            key="emphasis"
                            className={`${styles.label} body-emphasis`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={springTransition}
                            layout="position"  // Solo posición
                        >
                            {emphasis}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.form>
        );
    }

    // ─── Modo ButtonPill normal (Hero) ────────────────────
    return (
        <div className={styles.pill}>
            <Button variant={variant} onClick={onClick}>
                {label}
            </Button>
            <span className={`${styles.label} body-emphasis`}>
                {emphasis}
            </span>
        </div>
    );
}