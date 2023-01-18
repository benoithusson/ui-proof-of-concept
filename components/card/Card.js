import React from 'react';
import styles from './Card.module.scss';

export default function Card(props) {

    const { srcImage, altImage, priceItem, nameItem } = props;

    console.log(priceItem);

    return (
        <div className={styles.card}>

            {/* <div className={styles.bookmarkContainer}>
                <img src='./icons/bookmark.svg' alt="" />
            </div> */}

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