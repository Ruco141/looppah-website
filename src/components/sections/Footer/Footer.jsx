import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="footer">
            <Image
                width={22}
                alt="Looppah"
                height={30}
                src="/assets/brand/looppah_isotipo.svg"
            />

            <div className={styles.info}>
                <div className={styles.contact}>
                    <a
                        className={`${styles.text} ${styles.email} body-small`}
                        href="mailto:contact@looppah.com"
                    >
                        contact@looppah.com
                    </a>

                    <a
                        className={styles.instagramLink}
                        href="https://instagram.com/looppah"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Instagram de Looppah"
                    >
                        <Image
                            aria-hidden="true"
                            width={20}
                            alt=""
                            height={20}
                            src="/assets/icons/instagram.svg"
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
