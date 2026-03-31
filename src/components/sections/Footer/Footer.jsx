import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className={styles.footer}>
            <Image
                src="/assets/brand/looppah_isotipo.svg"
                alt="Looppah"
                width={22}
                height={30}
            />

            <div className={styles.info}>
                <div className={styles.contact}>
                    <a
                        href="mailto:contact@looppah.com"
                        className={`${styles.text} ${styles.email} body-small`}
                    >
                        contact@looppah.com
                    </a>

                    <a
                        href="https://instagram.com/looppah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.instagramLink}
                        aria-label="Instagram de Looppah"
                    >
                        <Image
                            src="/assets/icons/instagram.svg"
                            alt=""
                            width={20}
                            height={20}
                            aria-hidden="true"
                        />
                    </a>
                </div>

                <p className={`${styles.text} body-small`}>
                    Copyright {year} Looppah. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
