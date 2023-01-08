import React, { useState } from 'react';
import styles from './Cart.module.scss';

export default function Cart() {

    const [displayHeader, setDisplayHeader] = useState(false);
    const header = displayHeader ? `${styles.header} ${styles.displayHeader}` : `${styles.header}`;

    return (
        <header className={header} onClick={() => setDisplayHeader(!displayHeader)}>
            <div className={styles.headerNav}>
                <img src="icons/cart.svg" width="20" height="20" />
            </div>
            {/* <div className={styles.headerNav}></div> */}
        </header>
    )
}
