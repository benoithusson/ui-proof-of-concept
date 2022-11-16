import React from 'react';
import Card from '../../components/card/Card';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import styles from '../../styles/SneakersPage.module.scss';

export default function Sneakers(props) {
    return (
        <div className={styles.sneakersPageContainer}>
            <NavBar />
            <Header />
            {props.arrayItems.map((item, index) => {
                return (
                    <Card srcImage={item.srcImage} altImage={item.altImage} price={item.price} nameItem={item.name} key={index} />
                )
            })}
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