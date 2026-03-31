"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./MobileDropdown.module.css";

export default function MobileDropdown({ open, onClose, navLinks, activeHref }) {
    return (
        <AnimatePresence>
            {open && (
                <>
                    <div className={styles.overlay} onClick={onClose} />
                    <motion.div
                        className={styles.dropdown}
                        initial={{ scale: 0, borderRadius: "50%" }}
                        animate={{ scale: 1, borderRadius: "0%" }}
                        exit={{ scale: 0, borderRadius: "50%" }}
                        style={{ transformOrigin: "top right" }}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 20,
                        }}
                    >
                        <div className={styles.panel}>
                            <div className={styles.links}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className={`${styles.navLink} body-small`}
                                        onClick={onClose}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.contact}>
                                <a
                                    href="mailto:contact@looppah.com"
                                    className={`${styles.contactLink} body-small`}
                                >
                                    contact@looppah.com
                                </a>

                                <a
                                    href="https://instagram.com/looppah"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.instagram}
                                >
                                    <Image
                                        src="/assets/icons/instagram.svg"
                                        alt="Instagram"
                                        width={20}
                                        height={20}
                                    />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}