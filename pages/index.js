import React from 'react'
import styles from '../styles/Home.module.scss';
import HomeCard from '../components/home-card/HomeCard';
import HeroCard from '../components/hero-card/HeroCard';
import NavBar from '../components/navbar/NavBar';
import Header from '../components/cart/Cart';

export default function Home(props) {

  return (
    <div className={styles.container}>
      <NavBar />
      <Header />
      <section className={styles.heroSection}>
        <HeroCard srcImage="/hero-shoes.png" altImage="new shoes nike air force one" price="150" nameItem="Nike Air Force one" />
      </section>
      <section className={styles.section}>
        {props.arrayItems.map((item, index) => {
          return (
            <HomeCard
              srcImage={item.srcImage}
              altImage={item.altImage}
              priceItem={item.price}
              nameItem={item.name}
              key={index}
            />
          )
        })}
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const data = await import('./api/data_home.json');
  const arrayItems = data.shoes;

  return {
    props: {
      arrayItems
    }
  }
}