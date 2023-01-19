import React from 'react';
import styles from './HeroCard.module.scss';

export default function HeroCard(props) {

    const { srcImage, altImage, price, nameItem } = props;

    return (
        <div className={styles.heroCard}>
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
