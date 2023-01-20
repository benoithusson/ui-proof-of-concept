import React, { useState } from 'react';
import styles from './Card.module.scss';
import BookmarkSvg from '../bookmark-svg-icon/BookmarkSvg';
import InfoItem from '../info-item/InfoItem';
import Link from 'next/link';

export default function Card(props) {

    const { srcImage, altImage, nameItem, priceItem, slugItem } = props;

    const [stateBookmark, setStateBookmark] = useState(false);
    const [stateInfoItem, setStateInfoItemContainer] = useState(false);

    const handleAnimationHomeCard = (state) => {
        setStateBookmark(state);
        setStateInfoItemContainer(state);
    }

    return (
        <div
            className={styles.card}
            onMouseEnter={() => handleAnimationHomeCard(true)}
            onMouseLeave={() => handleAnimationHomeCard(false)}
        >
            <BookmarkSvg
                bookmarkWidth="24"
                bookmarkHeight="24"
                bookmarkIsDisplayed={stateBookmark}
            />
            <Link href={`/sneakers/${slugItem}`}>
                {srcImage ?
                    <div className={styles.imgContainer}>
                        {/* Refactoring: use </Image> from NextJS */}
                        <img src={srcImage} width="300" alt={altImage} />
                    </div>
                    :
                    <div>No image available</div>
                }
                {(nameItem || priceItem) &&
                    <InfoItem
                        name={nameItem}
                        price={priceItem}
                        InfoItemAreDisplayed={stateInfoItem}
                    />
                }
            </Link>
        </div>
    )
}