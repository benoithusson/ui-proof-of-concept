import React from 'react';
import styles from './HomeCard.module.scss';

export default function HomeCard(props) {

    const { srcImage, altImage, price, nameItem } = props;

    return (
        <div className={styles.homeCard}>
            {/* Refactoring : Used several time in the code (on HeroCard and HomeCard) */}
            {price &&
                <p className={styles.price}>{price}€</p>
            }
            {srcImage &&
                // TODO : Refactoring using </Image>
                <img src={srcImage} width="250" alt={altImage} />
            }
            {nameItem &&
                <p className={styles.nameItem}>{nameItem}</p>
            }
        </div>
    )
}
