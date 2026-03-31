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
                        animate={{ scale: 1, borderRadius: "0%" }}
                        exit={{ scale: 0, borderRadius: "50%" }}
                        initial={{ scale: 0, borderRadius: "50%" }}
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
                                        className={`${styles.navLink} body-small`}
                                        href={link.href}
                                        key={link.label}
                                        onClick={onClose}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            <div className={styles.divider} />

                            <div className={styles.contact}>
                                <a
                                    className={`${styles.contactLink} body-small`}
                                    href="mailto:contact@looppah.com"
                                >
                                    contact@looppah.com
                                </a>

                                <a
                                    className={styles.instagram}
                                    href="https://instagram.com/looppah"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <Image
                                        width={20}
                                        alt="Instagram"
                                        height={20}
                                        src="/assets/icons/instagram.svg"
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