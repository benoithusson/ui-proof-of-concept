import React from 'react';
import styles from './Card.module.scss';

export default function Card(props) {

    const { srcImage, altImage, price, nameItem } = props;

    return (
        <div className={styles.card}>
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
