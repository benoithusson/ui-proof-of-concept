import React from 'react';
import styles from './Card.module.scss';

export default function Card(props) {

    const { srcImage, altImage, price, nameItem, availableSizes } = props;

    return (
        <div className={styles.card}>
            { srcImage &&
                <div className={styles.firstContainer}>
                    <div className={styles.imgContainer}>
                        {/* TODO : Refactoring using </Image> */}
                        <img src={srcImage} width="300" alt={altImage} />
                    </div>
                </div>
            }

            { nameItem &&
                <div className={styles.secondContainer}>
                    <div className={styles.infoItemContainer}>
                        <span className={styles.nameItem}>{nameItem}</span>
                        {/* <span className={styles.price}>€ {price}</span> */}
                        <button className={styles.addToFavoritesCta}>
                            <img src="icons/bookmark.svg" width="20" height="20" alt="" class={styles.bookmarkSvg} />
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}