import React from 'react';
import Card from '../../components/card/Card';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/cart/Cart';
import styles from '../../styles/SneakersPage.module.scss';

export default function Sneakers(props) {
    return (
        <div className={styles.sneakersPageContainer}>
            <NavBar />
            <Header />
            <div className={styles.sneakersPageItems}>
                {props.arrayItems.map((item, index) => {
                    return (
                        <Card
                            srcImage={item.srcImage}
                            altImage={item.altImage}
                            priceItem={item.price}
                            nameItem={item.name}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const data = await import('../api/data_sneakers.json');
    const arrayItems = data.shoes;

    return {
        props: {
            arrayItems
        }
    }
}