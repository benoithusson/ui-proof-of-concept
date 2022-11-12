import React, { useState } from 'react'
import styles from './Card.module.scss';

export default function Card(props) {

    const { srcImage, altImage, price, nameItem } = props;

    const [cardFullScreen, setCardFullScreen] = useState(false);
    const cardClassName = cardFullScreen ? `${styles.card} ${styles.test}` : `${styles.card}`;

    return (
        <div className={cardClassName} onClick={() => setCardFullScreen(!cardFullScreen)}>
            {price &&
                <p className={styles.price}>{price}€</p>
            }
            {srcImage &&
                <img src={srcImage} width="250" alt={altImage} />
            }
            {nameItem &&
                <p className={styles.nameItem}>{nameItem}</p>
            }
        </div>
    )
}
