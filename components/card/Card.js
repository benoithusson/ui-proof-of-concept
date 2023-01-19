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
            <BookmarkSvg colorSvg="white" widthSvg="24" heightSvg="24" bookmarkIsDisplayed={stateBookmark} />

            {/* Component ? use also into HomeCard */}
            {srcImage ?
                <div className={styles.imgContainer}>
                    {/* Refactoring: use </Image> from NextJS */}
                    <img src={srcImage} width="300" alt={altImage} />
                </div>
                :
                <div>No image available</div>
            }

            {/* Component ? use also into HomeCard & HeroCard */}
            {nameItem &&
                <div className={styles.infoContainer}>
                    <span className={styles.nameItem}>{nameItem}</span>
                    {price &&
                        <span className={styles.price}>€ {price}</span>
                    }
                </div>
            }
        </div>
    )
}