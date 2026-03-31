"use client";

import { motion } from "motion/react";

export default function FadeIn({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}

            style={{ width: "100%" }}
            viewport={{ once: true, margin: "-80px" }}
        >
            {children}
        </motion.div>
    );
}