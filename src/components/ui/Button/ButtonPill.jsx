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
                layout
                onSubmit={handleSubmit}
                transition={springTransition}
            >
                <AnimatePresence mode="popLayout">
                    {isExpanded && (
                        <motion.input
                            className={styles.input}
                            key="input"
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            initial={{ width: 0, opacity: 0 }}
                            type="email"
                            value={email}
                            required
                            autoFocus
                            layout
                            onChange={handleInputChange}
                            placeholder={placeholder}
                            transition={springTransition}
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
                                        aria-hidden="true"
                                        width={16}
                                        alt=""
                                        height={16}
                                        src={icon}
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
                            className={`${styles.label} body-emphasis`}
                            key="emphasis"
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            layout="position"  // Solo posición
                            transition={springTransition}
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