"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 8 }}
            style={{ willChange: "opacity, transform" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}