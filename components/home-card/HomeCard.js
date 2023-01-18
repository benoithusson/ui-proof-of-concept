import React from 'react';
import styles from './HomeCard.module.scss';

export default function HomeCard(props) {

    const { srcImage, altImage, nameItem, price } = props;

    return (
        <div className={styles.homeCard}>
            { srcImage &&
                // Refactoring: use </Image>
                <img src={srcImage} width="250" alt={altImage} />
            }

            {/* Component ? use also into Card */}
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
