import React from 'react';
import styles from './HeroCard.module.scss';

export default function HeroCard(props) {

    const { srcImage, altImage, price, nameItem } = props;

    return (
        <div className={styles.heroCard}>
            {srcImage &&
                <img src={srcImage} width="900" alt={altImage} />
            }
            {nameItem &&
                <p className={styles.nameItem}>{nameItem}</p>
            }
            {price &&
                <p className={styles.price}>{price}€</p>
            }
        </div>
    )
}
