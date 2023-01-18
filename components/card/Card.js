import React, { useState } from 'react';
import styles from './Card.module.scss';
import BookmarkSvg from '../bookmark-svg-icon/BookmarkSvg';

export default function Card(props) {

    const { srcImage, altImage, nameItem, price } = props;

    const [stateBookmark, setStateBookmark] = useState(false);

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setStateBookmark(true)}
            onMouseLeave={() => setStateBookmark(false)}
        >
            <BookmarkSvg colorSvg="white" widthSvg="24" widthSvg="24" bookmarkIsDisplayed={stateBookmark} />

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
                    {price &&
                        <span className={styles.price}>€ {price}</span>
                    }
                </div>
            }
        </div >
    )
}