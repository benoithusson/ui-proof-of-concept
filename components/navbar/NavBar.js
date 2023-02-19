import React, { useState } from 'react'
import SocialIcons from '../social-icon/SocialIcon'
import styles from './NavBar.module.scss';
import Link from 'next/link';

export default function NavBar() {

    // https://stackoverflow.com/questions/66992178/how-can-i-toggle-a-class-and-change-the-css-in-nextjs
    const [toggleNavBar, setToggleNavBar] = useState(false);
    const [hideItemsNavBar, setHideItemsNavBar] = useState(false);

    const navBar = toggleNavBar ? `${styles.navbar} ${styles.displayNavBar}` : `${styles.navbar}`;
    // const navBarItem = hideItemsNavBar ? `${styles.navbarItem} ${styles.hideItemNavBar}` : `${styles.navbarItem}`;

    const handleToggleNavBar = () => {
        setToggleNavBar(!toggleNavBar);
        setHideItemsNavBar(false);
    }

    const handleHideItems = () => {
        setHideItemsNavBar(!hideItemsNavBar);
        setTimeout(() => {
            setToggleNavBar(!toggleNavBar);
        }, 380)
    }

    return (
        <nav className={navBar}>
            {
                !toggleNavBar && (
                    <>
                        <div className={styles.navBarNav}>
                            <div className={styles.logo}>
                                <img src="icons/icon-store.svg" width="60" height="60" alt="" />
                            </div>
                            <div className={styles.navbarItem}>
                                <Link href="/">Home</Link>
                            </div>
                            <div className={styles.navbarItem}>
                                <Link href="/sneakers">Sneakers</Link>
                            </div>
                            <div className={styles.navbarItem}>
                                <Link href="/sneakers">Accessories</Link>
                            </div>
                            <div className={styles.navbarItem}>
                                <Link href="/sneakers">Sale</Link>
                            </div>
                        </div>
                    </>
                )
            }
            {
                toggleNavBar && (
                    <>
                        <div className={styles.navBarItemsContainer}>
                            <div className={styles.closeNavBtn} onClick={(e) => handleHideItems(e)}>
                                <img src="icons/close-icon.svg" width="60" height="60" alt="" />
                            </div>
                            <div className={styles.navbarItem}>
                                <Link href="/">Home</Link>
                            </div>
                            <div className={navBarItem}>
                                <Link href="/sneakers">Sneakers</Link>
                            </div>
                            <div className={navBarItem}>
                                <Link href="javascript:void(0)">Contacts</Link>
                            </div>
                            <div className={styles.socialIconsContainer}>
                                <SocialIcons srcImage="/facebook.svg" />
                                <SocialIcons srcImage="/instagram.svg" />
                                <SocialIcons srcImage="/twitter.svg" />
                            </div>
                        </div>
                    </>
                )
            }
        </nav>
    )
}
