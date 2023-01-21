import React, { useState } from 'react';
import styles from './HeroCard.module.scss';
import BookmarkItemSvg from '../bookmark-item/BookmarkItemSvg';

export default function HeroCard(props) {

    const { srcImage, altImage, price, nameItem } = props;

    const [stateBookmark, setStateBookmark] = useState(false);

    return (
        <div
            className={styles.heroCard}
            onMouseEnter={() => setStateBookmark(true)}
            onMouseLeave={() => setStateBookmark(false)}
        >

            {/* Créer taille standard si pas de probs */}
            <BookmarkItemSvg
                bookmarkWidth="20"
                bookmarkHeight="20"
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
