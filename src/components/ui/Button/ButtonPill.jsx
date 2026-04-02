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
                                       href,
                                       icon,
                                       isStatic = false,
                                       onClick,
                                       onSubmit,
                                       placeholder,
                                       submitLabel,
                                   }) {
    const [status, setStatus] = useState("idle"); // "idle" | "expanded" | "loading" | "success" | "error"
    const [email, setEmail] = useState("");

    const pillRef = useMeasuredWidth();

    async function handleSubmit() {
        if (status !== "expanded") return;

        setStatus("loading");

        try {
            await onSubmit?.(email);
            setEmail("");
            setStatus("success");
        } catch {
            setStatus("error");
            setTimeout(() => {
                setStatus("expanded");
                setEmail("");
            }, 2500);
        }
    }

    function handleButtonClick() {
        if (isStatic) {
            if (onClick) onClick();
        } else if (status === "idle") {
            setStatus("expanded");
        } else if (status === "expanded") {
            handleSubmit();
        }
    }

    const isActive = status !== "idle";
    const isDisabled = status === "loading" || status === "success";

    return (
        <div
            className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
            ref={pillRef}
        >
            <motion.div
                layout="position"
                style={{ order: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <Button
                    disabled={isDisabled}
                    href={isStatic ? href : undefined}
                    variant={variant}
                    onClick={handleButtonClick}
                >
                    {isActive ? (
                        <>
                            <span className={styles.submitText}>{submitLabel}</span>
                            <span className={styles.submitIcon}>
                                <Image
                                    alt=""
                                    aria-hidden="true"
                                    height={16}
                                    src={icon}
                                    width={16}
                                />
                            </span>
                        </>
                    ) : (
                        label
                    )}
                </Button>
            </motion.div>

            <div className={`${styles.capsule} ${isActive ? styles.capsuleVisible : ""}`}>
                <AnimatePresence initial={false} mode="wait">
                    {status === "idle" && (
                        <motion.span
                            key="emphasis"
                            className={`${styles.label} body-emphasis`}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            {emphasis}
                        </motion.span>
                    )}
                    {status === "expanded" && (
                        <motion.input
                            key="input"
                            className={`${styles.input} body-small`}
                            type="email"
                            value={email}
                            placeholder={placeholder}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            autoFocus
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        />
                    )}
                    {status === "loading" && (
                        <motion.span
                            key="loading"
                            className={`${styles.label} body-small`}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            Un momento…
                        </motion.span>
                    )}
                    {status === "success" && (
                        <motion.span
                            key="success"
                            className={`${styles.label} body-small`}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            ¡Ya estás en la lista!
                        </motion.span>
                    )}
                    {status === "error" && (
                        <motion.span
                            key="error"
                            className={`${styles.label} body-small`}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                        >
                            Algo salió mal.
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}