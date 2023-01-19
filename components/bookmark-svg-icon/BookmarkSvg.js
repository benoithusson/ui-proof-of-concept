import React from 'react'
import styles from './BookmarkSvg.module.scss'

export default function BookmarkSvg(props) {

    const { colorSvg, widthSvg, heightSvg, bookmarkIsDisplayed } = props;

    const bookmark = bookmarkIsDisplayed ? `${styles.bookmark} ${styles.bookmarkDisplayed}` : `${styles.bookmark}`;

    return (
        <div className={bookmark}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={widthSvg}
                height={heightSvg}
                fill={colorSvg}
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                >
                </path>
            </svg>
        </div>
    )
}
