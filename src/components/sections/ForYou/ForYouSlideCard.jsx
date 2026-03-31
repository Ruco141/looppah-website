import Image from "next/image";
import BackdropBlur from "@/components/ui/effects/BackdropBlur";
import styles from "./ForYouSlideCard.module.css";

export default function ForYouSlideCard({ sender, receiver }) {
    return (
        <BackdropBlur className={styles.card} blur="10px">
            <article aria-label={`Conexión entre ${sender.name} y ${receiver.name}`}>
                <div className={styles.participant}>
                    <header className={styles.participantHeader}>
                        <div className={styles.avatarWrap}>
                            <Image
                                className={styles.avatar}
                                width={38}
                                alt={sender.name}
                                height={38}
                                src={sender.avatar}
                            />
                        </div>
                        <p className={`${styles.participantName} body-stylized`}>{sender.name}</p>
                    </header>
                    <div className={`${styles.bubble} ${styles.bubbleSender}`}>
                        <p className={`${styles.message} body-base`}>{sender.message}</p>
                    </div>
                </div>

                <div className={`${styles.participant} ${styles.participantReceiver}`}>
                    <header className={`${styles.participantHeader} ${styles.participantHeaderReceiver}`}>
                        <p className={`${styles.participantName} ${styles.participantNameReceiver} body-stylized`}>
                            {receiver.name}
                        </p>
                        <div className={styles.avatarWrap}>
                            <Image
                                className={styles.avatar}
                                width={38}
                                alt={receiver.name}
                                height={38}
                                src={receiver.avatar}
                            />
                        </div>
                    </header>
                    <div className={`${styles.bubble} ${styles.bubbleReceiver}`}>
                        <p className={`${styles.message} ${styles.messageReceiver} body-base`}>{receiver.message}</p>
                    </div>
                </div>
            </article>
        </BackdropBlur>
    );
}