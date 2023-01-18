import React from 'react';
import styles from './Card.module.scss';
import BookmarkSvg from '../bookmark-svg-icon/BookmarkSvg';

export default function Card(props) {

    const { srcImage, altImage, priceItem, nameItem, price } = props;

    console.log(priceItem);

    return (
        <div className={styles.card}>

            <BookmarkSvg colorSvg="white" widthSvg="24" widthSvg="24" />

            {price &&
                <p className={styles.price}>{price}€</p>
            }

            {
                srcImage ?
                    <div className={styles.imgContainer}>
                        {/* Refactoring: using </Image> */}
                        <img src={srcImage} width="300" alt={altImage} />
                    </div>
                    :
                    <div>No image available</div>
            }

            {
                nameItem &&
                <div className={styles.infoContainer}>
                    <span className={styles.nameItem}>{nameItem}</span>
                </div>
            }
        </div >
    )
}