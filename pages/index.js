import React, { useState } from 'react'
import Link from 'next/link';
import SocialIcons from '../components/social-icon/SocialIcon';
import styles from '../styles/Home.module.scss';
import Card from '../components/card/Card';
import HeroCard from '../components/hero-card/HeroCard';
import NavBar from '../components/navbar/NavBar';

export default function Home(props) {

  // https://stackoverflow.com/questions/66992178/how-can-i-toggle-a-class-and-change-the-css-in-nextjs
  const [displayHeader, setDisplayHeader] = useState(false);
  const headerClassName = displayHeader ? `${styles.header} ${styles.displayHeader}` : `${styles.header}`;

  return (
    <div className={styles.container}>
      <NavBar />
      {/* TODO : make a component for header */}
      <header className={headerClassName} onClick={() => setDisplayHeader(!displayHeader)}>
        <div className={styles.headerNav}>
          <img src="icons/profil.svg" width="20" height="20" />
        </div>
        <div className={styles.headerNav}>
          <img src="icons/cart.svg" width="20" height="20" />
        </div>
        <div className={styles.headerNav}></div>
      </header>
      <section className={styles.heroSection}>
        <HeroCard srcImage="/hero-shoes.png" altImage="new shoes nike air force one" price="150" nameItem="Nike Air Force one" />
      </section>
      <section className={styles.section}>
        {props.arrayItems.map((item, index) => {
          return (
            <Card srcImage={item.srcImage} altImage={item.altImage} price={item.price} nameItem={item.name} key={index} />
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