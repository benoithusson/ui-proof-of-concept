import React, { useState, useContext } from 'react';
// import BookmarkContext from '../../pages/context/bookmarkContext';
import styles from './Card.module.scss';
import BookmarkItemSvg from '../bookmark-item/BookmarkItemSvg';
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

    // const { addToFavorite } = useContext(BookmarkContext);
    // console.log(addToFavorite);

    return (
        <div
            className={styles.card}
            onMouseEnter={() => handleAnimationHomeCard(true)}
            onMouseLeave={() => handleAnimationHomeCard(false)}
        >

            <BookmarkItemSvg
                bookmarkWidth="20"
                bookmarkHeight="20"
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