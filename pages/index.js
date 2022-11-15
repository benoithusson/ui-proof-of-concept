import React, { useState } from 'react'
import styles from '../styles/Home.module.scss';
import Card from '../components/card/Card';
import HeroCard from '../components/hero-card/HeroCard';
import Link from 'next/link';

export default function Home(props) {

  // https://stackoverflow.com/questions/66992178/how-can-i-toggle-a-class-and-change-the-css-in-nextjs
  const [toggleNavBar, setToggleNavBar] = useState(false);
  const [displayHeader, setDisplayHeader] = useState(false);
  const [hideItemsNavBar, setHideItemsNavBar] = useState(false);

  const navBarClassName = toggleNavBar ? `${styles.navbar} ${styles.displayNavBar}` : `${styles.navbar}`;
  const headerClassName = displayHeader ? `${styles.header} ${styles.displayHeader}` : `${styles.header}`;
  const itemsNavBar = hideItemsNavBar ? `${styles.itemsNavBar} ${styles.test}` : `${styles.itemsNavBar}`;

  const handleToggleNavBar = () => {
    setToggleNavBar(!toggleNavBar);
    setHideItemsNavBar(false);
  }

  const handleHideItems = (e) => {
    setHideItemsNavBar(!hideItemsNavBar);
    setTimeout(() => {
      setToggleNavBar(!toggleNavBar);
    }, 380)
  }

  return (
    <div className={styles.container}>
      <nav className={navBarClassName}>
        {
          !toggleNavBar && (
            // TODO : make component
            <>
              <div className={styles.navBarNav}>
                <img src="icons/icon-store.svg" width="60" height="60" alt="" />
              </div>
              <div className={styles.navBarNav} onClick={() => handleToggleNavBar()}>
                <img src="icons/hamburger-icon.svg" width="30" height="30" alt="" />
              </div>
              <div className={styles.navBarNav}>
                <ul>
                  {/* TODO : make component */}
                  <li className={styles.socialIcon}>
                    <img src="icons/facebook.svg" width="20" height="20" alt="" />
                  </li>
                  <li className={styles.socialIcon}>
                    <img src="icons/instagram.svg" width="20" height="20" alt="" />
                  </li>
                  <li className={styles.socialIcon}>
                    <img src="icons/twitter.svg" width="20" height="20" alt="" />
                  </li>
                </ul>
              </div>
            </>
          )
        }
        {
          toggleNavBar && (
            // TODO : make component
            <>
              <div className={styles.itemsNavBarContainer}>
                <div className={styles.closeNavBtn} onClick={(e) => handleHideItems(e)}>
                  <img src="icons/close-icon.svg" width="60" height="60" alt="" />
                </div>
                <div className={itemsNavBar}>
                  <Link href="javascript:void(0)">Home</Link>
                </div>
                <div className={itemsNavBar}>
                  <Link href="/sneakers">Sneakers</Link>
                </div>
                <div className={itemsNavBar}>
                  <Link href="javascript:void(0)">Accessories</Link>
                </div>
                <div className={itemsNavBar}>
                  <Link href="javascript:void(0)">Contacts</Link>
                </div>
                <div className={styles.socialIconsContainer}>
                  {/* TODO : make component */}
                  <ul>
                    <li className={styles.socialIcon}>
                      <img src="icons/facebook.svg" width="30" height="30" alt="" />
                    </li>
                    <li className={styles.socialIcon}>
                      <img src="icons/instagram.svg" width="30" height="30" alt="" />
                    </li>
                    <li className={styles.socialIcon}>
                      <img src="icons/twitter.svg" width="30" height="30" alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )
        }
      </nav>
      {/* TODO : Make component */}
      <header className={headerClassName} onClick={() => setDisplayHeader(!displayHeader)}>
        <div className={styles.headerNav}>
          <img src="icons/profil.svg" width="20" height="20" alt="" />
        </div>
        <div className={styles.headerNav}>
          <img src="icons/cart.svg" width="20" height="20" alt="" />
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

export async function getServerSideProps() {
  const data = await import('./api/data.json');
  const arrayItems = data.shoes;

  return {
    props: {
      arrayItems
    }
  }
}