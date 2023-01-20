import React, { useState } from 'react';
import styles from './HeroCard.module.scss';
import BookmarkSvg from '../bookmark-svg-icon/BookmarkSvg';

export default function HeroCard(props) {

    const { srcImage, altImage, price, nameItem } = props;

    const [stateBookmark, setStateBookmark] = useState(false);

    return (
        <div
            className={styles.heroCard}
            onMouseEnter={() => setStateBookmark(true)}
            onMouseLeave={() => setStateBookmark(false)}
        >

            <BookmarkSvg
                bookmarkWidth="24"
                bookmarkHeight="24"
                bookmarkIsDisplayed={stateBookmark}
            />

            {srcImage &&
                <img src={srcImage} width="900" alt={altImage} />
            }
            { nameItem &&
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
