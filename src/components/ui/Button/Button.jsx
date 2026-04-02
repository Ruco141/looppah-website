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
            transition={{type: "spring", stiffness: 150, damping:15}}
            whileHover={{filter: "brightness(1.2)", scale: 1.05}}
            whileTap={{filter:"brightness(0.8)", scale: 0.95}}
            {...props}
        >
            {children}
        </motion.button>
    );
}