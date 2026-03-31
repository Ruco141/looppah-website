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
                            <div key={tag.label} className={styles.tag}>
                                <span className={`body-small ${styles.tagLabel}`}>{tag.label}</span>

                                <div className={styles.tagIconWrap}>
                                    <Image
                                        className={styles.tagIcon}
                                        src={tag.icon}
                                        alt=""
                                        aria-hidden="true"
                                        width={22}
                                        height={22}
                                        quality={90}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.imageWrap}>
                <Image
                    className={styles.image}
                    src={image}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(min-width: 80rem) 50vw, 100vw"
                    quality={90}
                />
            </div>
        </div>
    );
}