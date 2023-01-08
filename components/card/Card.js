import React from 'react';
import styles from './Card.module.scss';

export default function Card(props) {

    const { srcImage, altImage, price, nameItem, availableSizes } = props;

    console.log(availableSizes);

    return (
        <div className={styles.card}>
            { srcImage &&
                <div className={styles.cardImgContainer}>
                    {/* TODO : Refactoring using </Image> */}
                    <img src={srcImage} width="400" alt={altImage} />
                </div>
            }
            { nameItem &&
                <div className={styles.cardNameContainer}>
                    <p className={styles.nameItem}>{nameItem} {price}€</p>
                </div>
            }
            {/* { availableSizes &&
                <div className={styles.availableSizesContainer}>
                    <p className={styles.availableSizes}>{availableSizes}</p>
                </div>
            } */}
        </div>
    )
}
