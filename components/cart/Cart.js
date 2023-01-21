import React, { useState } from 'react';
import BookmarkSvg from '../bookmark-sidebar/BookmarkSvg.js';
import styles from '../cart/Cart.module.scss';

export default function Cart() {

    const [displayHeader, setDisplayHeader] = useState(false);
    const header = displayHeader ? `${styles.header} ${styles.displayHeader}` : `${styles.header}`;

    return (
        <header className={header} onClick={() => setDisplayHeader(!displayHeader)}>
            <div className={styles.headerNav}>
                <BookmarkSvg
                    bookmarkWidth="24"
                    bookmarkHeight="24"
                />
                <div className={styles.cartSvgContainer}>
                    <img src="icons/cart.svg" width="20" height="20" />
                </div>
            </div>
        </header>
    )
}
