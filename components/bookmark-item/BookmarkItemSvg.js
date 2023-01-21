import React, { useState } from 'react'
import styles from './BookmarkItemSvg.module.scss'

export default function BookmarkItemSvg(props) {

    const { bookmarkWidth, bookmarkHeight, bookmarkIsDisplayed } = props;

    const [addToFavorite, setAddToFavorite] = useState(false);

    const bookmarkContainer = bookmarkIsDisplayed ? `${styles.bookmarkContainer} ${styles.bookmarkIsDisplayed}` : `${styles.bookmarkContainer}`;
    const changeColorBookMark = addToFavorite ? `${styles.bookmark} ${styles.itemIsAddedToFavorite}` : `${styles.bookmark}`;


    return (
        <div className={bookmarkContainer} onClick={() => setAddToFavorite(!addToFavorite)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={bookmarkWidth}
                height={bookmarkHeight}
                viewBox="0 0 16 16"
                className={changeColorBookMark}
            >
                <path
                    fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                >
                </path>
            </svg>
        </div>
    )
}
