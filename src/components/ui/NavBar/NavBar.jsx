"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import useScrolled from "@/hooks/useScrolled";
import Button from "@/components/ui/Button/Button";
import Hamburger from "./Hamburger";
import MobileDropdown from "./MobileDropdown";
import styles from "./NavBar.module.css";


const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Socios", href: "/partners" },
    { label: "Nosotros", href: "/about" },
];


export default function Navbar() {
    const pathname = usePathname();
    const [hovered, setHovered] = useState(null);
    const [open, setOpen] = useState(false);
    const scrolled = useScrolled();


    // Determina cuál link es el activo comparando con la URL actual
    const activeHref = navLinks.find((link) =>
        link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
    )?.href;

    // Si hay hover, la burbuja va ahí. Si no, regresara al activo.
    const bubbleTarget = hovered ?? activeHref;

    return (
        <nav className={styles.navbar}>
            {/* ── Brand ── */}
            <div className={styles.brand}>
                <Image
                    className={styles.isotipo}
                    width={22}
                    alt="Looppah"
                    height={30}
                    src="/assets/brand/looppah_isotipo.svg"
                />

                <motion.div
                    className={scrolled ? styles.scrollHidden : ""}
                    animate={{ opacity: scrolled ? 0 : 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <Image
                        className={styles.logotipo}
                        width={179}
                        alt="Looppah"
                        height={42}
                        src="/assets/brand/looppah_logotipo.svg"
                    />
                </motion.div>
            </div>

            {/* ── SelectionBar ── */}
            <div
                className={styles.selectionBar}
                onMouseLeave={() => setHovered(null)}
            >
                {navLinks.map((link) => (
                    <Link
                        className={`${styles.navLink} body-small`}
                        href={link.href}
                        key={link.label}
                        onMouseEnter={() => setHovered(link.href)}
                    >
                        {bubbleTarget === link.href && (
                            <motion.span
                                className={styles.activeBubble}
                                layout="x"
                                layoutId="bubble"
                                animate={{
                                    scale: hovered ? 1.1 : 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                }}
                                >
                            </motion.span>
                        )}
                        <span className={styles.navLabel}>{link.label}</span>
                    </Link>
                ))}
            </div>

            {/* ── CTA ── */}
            <motion.div
                className={`${styles.ctaWrap} ${scrolled ? styles.scrollHidden : ""}`}
                animate={{ opacity: scrolled ? 0 : 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <Button variant="primary">Únete a la lista</Button>
            </motion.div>


            {/* ── Mobile ── */}
            <Hamburger open={open} onToggle={() => setOpen((v) => !v)} />

            <MobileDropdown
                pathname={activeHref}
                navLinks={navLinks}
                open={open}
                onClose={() => setOpen(false)}
            />
        </nav>
    );
}