"use client";

import { motion } from "motion/react"
import styles from "./Button.module.css";

export default function Button(
    {
        children,
        variant = "primary",
        ...props
    }) {
    return (
        <motion.button
            className={`${styles.btn} ${styles[variant]} body-small`}
            whileTap={{filter:"brightness(0.8)", scale: 0.95}}
            transition={{type: "spring", stiffness: 300, damping:15}}

            whileHover={{filter: "brightness(1.2)", scale: 1.05}}
            {...props}
        >
            {children}
        </motion.button>
    );
}