import React from 'react';
import Card from '../../components/card/Card';
import NavBar from '../../components/navbar/NavBar';
import styles from '../../styles/SneakersPage.module.scss';
// import Cart from '../components/cart/Cart';

export default function Sneakers(props) {
    return (
        <div className={styles.sneakersPageContainer}>
            <NavBar />
            {/* <Cart /> */}
            <div className={styles.sneakersPageItems}>
                {props.arrayItems.map((item, index) => {
                    return (
                        <Card
                            srcImage={item.srcImage}
                            altImage={item.altImage}
                            priceItem={item.price}
                            nameItem={item.name}
                            slugItem={item.slug}
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