import React, { useState } from 'react'
import styles from './InfoItem.module.scss';

export default function InfoItem(props) {

    const { name, price, InfoItemAreDisplayed, userIsOnAHomeCard } = props;

    const infoItem = InfoItemAreDisplayed ? `${styles.infoContainerCard} ${styles.displayInfo}` : `${styles.infoContainerCard}`
    const infoItemHomeContainer = userIsOnAHomeCard && `${styles.infoContainer} ${styles.infoContainerHomeCard}`;

    return (
        <div className={`${infoItem} ${infoItemHomeContainer}`}>
            <span className={styles.nameItem}>{name}</span>
            {
                price && <span className={styles.price}>€ {price}</span>
            }
        </div>
    )
}
