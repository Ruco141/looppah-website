import Image from "next/image";
import styles from "./HowItWorksBlock.module.css";

export default function HowItWorksBlock({ title, description, tags, image }) {
    return (
        <div className={styles.block}>
            <div className={styles.content}>
                <h3 className={`headline-h4 ${styles.title}`}>{title}</h3>

                <div className={styles.subheadline}>
                    <p className={`body-base ${styles.description}`}>{description}</p>

                    <div className={styles.tags}>
                        {tags.map((tag) => (
                            <div className={styles.tag} key={tag.label}>
                                <span className={`body-small ${styles.tagLabel}`}>{tag.label}</span>

                                <div className={styles.tagIconWrap}>
                                    <Image
                                        aria-hidden="true"
                                        className={styles.tagIcon}
                                        width={22}
                                        alt=""
                                        height={22}
                                        quality={90}
                                        src={tag.icon}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.imageWrap}>
                <Image
                    aria-hidden="true"
                    className={styles.image}
                    alt=""
                    fill
                    quality={90}
                    sizes="(min-width: 80rem) 50vw, 100vw"
                    src={image}
                />
            </div>
        </div>
    );
}