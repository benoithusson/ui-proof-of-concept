import React, { useState } from 'react'
import styles from '../../styles/Concept.module.scss';
import Card from '../../components/card/Card';
import HeroCard from '../../components/hero-card/HeroCard';
import Link from 'next/link';

export default function index(props) {

    // https://stackoverflow.com/questions/66992178/how-can-i-toggle-a-class-and-change-the-css-in-nextjs
    const [displayNavBar, setDisplayNavBar] = useState(false);
    const [displayHeader, setDisplayHeader] = useState(false);
    const [hideItemsNavBar, setHideItemsNavBar] = useState(false);

    // If displayNavBar is TRUE > we want to display navBar > add the following classes to display navBar
    const navBarClassName = displayNavBar ? `${styles.navbar} ${styles.displayNavBar}` : `${styles.navbar}`;
    // If headerClassName is TRUE > we want to display header > add the following classes to display header
    const headerClassName = displayHeader ? `${styles.header} ${styles.displayHeader}` : `${styles.header}`;
    // If hideItemsNavBar is TRUE > we want to hide navBar items > add the following classes to hide items
    const itemsNavBarClassName = hideItemsNavBar ? `${styles.itemsNavBar} ${styles.test}` : `${styles.itemsNavBar}`;

    // PROBLEM
    // Make the animation to hide items and THEN hide the navBar

    // When I click on close, I want :
    // To make the animation for items so that they disappear
    // Then close the navBar

    const handleNavBar = () => {
        setDisplayNavBar(true);
    }

    const handleHideItems = (e) => {
        setHideItemsNavBar(!itemsNavBarClassName);
        if (e) {
            setTimeout(() => {
                setDisplayNavBar(!displayNavBar);
                // classList ?
            }, 1000);
        }
    }

    return (
        <div className={styles.container}>
            <nav className={navBarClassName}>
                {
                    !displayNavBar && (
                        <>
                            <div className={styles.navBarNav}>bloc 1</div>
                            <div className={styles.navBarNav} onClick={() => handleNavBar()}
                            >bloc 2</div>
                            <div className={styles.navBarNav}>bloc 3</div>
                        </>
                    )
                }
                {
                    displayNavBar && (
                        <>
                            <div className={styles.itemsNavBarContainer}>
                                <div className={styles.closeNavBtn} onClick={(e) => {
                                    handleNavBar();
                                    handleHideItems(e);
                                }}>
                                    <img src="icons/close-icon.svg" width="60" height="60" alt="" />
                                </div>
                                <div className={itemsNavBarClassName}>
                                    <Link href="javascript:void(0)">Home</Link>
                                </div>
                                <div className={itemsNavBarClassName}>
                                    <Link href="javascript:void(0)">Sneakers</Link>
                                </div>
                                <div className={itemsNavBarClassName}>
                                    <Link href="javascript:void(0)">Accessories</Link>
                                </div>
                                <div className={itemsNavBarClassName}>
                                    <Link href="javascript:void(0)">Contacts</Link>
                                </div>
                            </div>
                        </>
                    )
                }
            </nav>
            <header className={headerClassName} onClick={() => setDisplayHeader(!displayHeader)}>
                <div className={styles.headerNav}>bloc 1</div>
                <div className={styles.headerNav}>bloc 2</div>
                <div className={styles.headerNav}>bloc 3</div>
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
    const data = await import('../api/data.json');
    const arrayItems = data.shoes;

    return {
        props: {
            arrayItems
        }
    }
}