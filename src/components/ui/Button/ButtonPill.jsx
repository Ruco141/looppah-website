"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Button from "./Button";
import styles from "./ButtonPill.module.css";
import { useMeasuredWidth } from "@/hooks/useMeasuredWidth";

export default function ButtonPill({
                                       variant,
                                       label,
                                       emphasis,
                                       onClick,
                                       isStatic = false,
                                       placeholder,
                                       submitLabel,
                                       icon,
                                       onSubmit,
                                   }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [email, setEmail] = useState("");

    const pillRef = useMeasuredWidth();

    function handleSubmit() {
        if (onSubmit) onSubmit(email);
        setEmail("");
        setIsExpanded(false);
    }

    function handleButtonClick() {
        if (isStatic) {
            if (onClick) onClick();
        } else if (isExpanded) {
            handleSubmit();
        } else {
            setIsExpanded(true);
        }
    }

    return (
        <div className={`${styles.pill} ${isExpanded ? styles.pillActive : ""}`}
            ref={pillRef}
        >
            <motion.div style={{ order: isExpanded ? 1 : 0 }}
                        layout="position"
                        transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Button variant={variant} onClick={handleButtonClick}>
                    {isExpanded ? (
                        <>
                            <span className={styles.submitText}>{submitLabel}</span>
                            <span className={styles.submitIcon}>
                                <Image alt="" 
                                       width={16} 
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

            <div className={`${styles.capsule} ${isExpanded ? styles.capsuleVisible : ""}`}>
                <AnimatePresence initial={false} mode="wait">
                    {!isExpanded ? (
                        <motion.span className={`${styles.label} body-emphasis`}
                                     key="emphasis"
                                     animate={{ opacity: 1 }}
                                     exit={{ opacity: 0 }}
                                     initial={{ opacity: 0 }}
                                     transition={{ duration: 0.1 }}
                        >
                            {emphasis}
                        </motion.span>
                    ) : (
                        <motion.input className={`${styles.input} body-small`}
                                      key="input"
                                      type="email"
                                      value={email}
                                      placeholder={placeholder}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      initial={{ opacity: 0 }}
                                      transition={{ duration: 0.1 }}
                                      autoFocus
                                      onChange={(e) => setEmail(e.target.value)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}