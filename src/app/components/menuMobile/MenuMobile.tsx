"use client";
import styles from './MenuMobile.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/imgLogoFull.png';
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
import { useState } from 'react';

const MenuMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <FaAlignJustify onClick={toggleMenu} size={24} className={styles.mobileSvg} />
                    <Image 
                        src={logo}
                        alt='logo'
                        className={styles.mobileImg}
                    />
            </div>

            {menuOpen && (
                    <nav className={styles.menuList}>
                            {menuOpen && (
                                <FaWindowClose onClick={closeMenu} className={styles.buttonCloseMenuMobile}/>
                            )}
                            <ul>
                                <li><Link href="/#Menu" onClick={closeMenu}>HOME</Link></li>
                                <li><Link href="/#Presentation" onClick={closeMenu}>SERVICES</Link></li>
                                <li><Link href="/#Tecnologies" onClick={closeMenu}>WORK</Link></li>
                                <li><Link href="/#Insights" onClick={closeMenu}>INSIGHTS</Link></li>
                                <li><Link href="/#Infos" onClick={closeMenu}>COMPANY</Link></li>
                            </ul>
                    </nav>
            )}
        </header>
    );
}

export default MenuMobile;