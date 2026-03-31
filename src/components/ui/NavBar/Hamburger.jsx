"use client";

import { motion } from "motion/react";
import styles from "./Hamburger.module.css";

export default function Hamburger({ open, onToggle }) {
    return (
        <button
            className={styles.hamburger}
            type="button"
            onClick={onToggle}
        >
            {/* Top-left → diagonal \ */}
            <motion.span
                className={styles.dot}
                animate={{
                    x: open ? 0 : -6,
                    y: open ? 0 : -6,
                    rotate: open ? 45 : 0,
                    width: open ? 20 : 5,
                    height: open ? 3 : 5,
                    borderRadius: open ? 10 : 10,
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            />
            {/* Top-right → diagonal / */}
            <motion.span
                className={styles.dot}
                animate={{
                    x: open ? 0 : 6,
                    y: open ? 0 : -6,
                    rotate: open ? -45 : 0,
                    width: open ? 20 : 5,
                    height: open ? 3 : 5,
                    borderRadius: open ? 10 : 10,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
            />
            {/* Bottom-left → diagonal / */}
            <motion.span
                className={styles.dot}
                animate={{
                    x: open ? 0 : -6,
                    y: open ? 0 : 6,
                    rotate: open ? -45 : 0,
                    width: open ? 20 : 5,
                    height: open ? 3 : 5,
                    borderRadius: open ? 10 : 10,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
            />
            {/* Bottom-right → diagonal \ */}
            <motion.span
                className={styles.dot}
                animate={{
                    x: open ? 0 : 6,
                    y: open ? 0 : 6,
                    rotate: open ? 45 : 0,
                    width: open ? 20 : 5,
                    height: open ? 3 : 5,
                    borderRadius: open ? 10 : 10,
                }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
            />
        </button>
    );
}