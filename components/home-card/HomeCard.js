import React, { useState } from 'react';
import styles from './HomeCard.module.scss';
import BookmarkSvg from '../bookmark-svg-icon/BookmarkSvg';
import InfoItem from '../info-item/InfoItem';

export default function HomeCard(props) {

    const { srcImage, altImage, nameItem, priceItem } = props;

    const [stateBookmark, setStateBookmark] = useState(false);
    const [stateInfoItem, setStateInfoItemContainer] = useState(false);

    const handleAnimationHomeCard = (state) => {
        setStateBookmark(state);
        setStateInfoItemContainer(state);
    }

    return (
        <div
            className={styles.homeCard}
            onMouseEnter={() => handleAnimationHomeCard(true)}
            onMouseLeave={() => handleAnimationHomeCard(false)}
        >

            <BookmarkSvg colorSvg="white" widthSvg="24" heightSvg="24" bookmarkIsDisplayed={stateBookmark} />

            { srcImage &&
                // Refactoring: use </Image> from NextJS
                <img src={srcImage} width="250" alt={altImage} />
            }

            { (nameItem || priceItem) &&
                <InfoItem name={nameItem} price={priceItem} InfoItemAreDisplayed={stateInfoItem} userIsOnAHomeCard={true} />
            }
        </div>
    )
}