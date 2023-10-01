"use client";
import styles from './MenuMobile.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/images/imgLogoFull.png';
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const MenuMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const animationProps = useSpring({
        opacity: menuOpen ? 1 : 0,
        transform: menuOpen ? 'translateX(0%)' : 'translateX(-100%)',
        config: { ...config.gentle, friction: 20 }
    });

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'; // Desativa a rolagem quando o menu estiver aberto
        } else {
            document.body.style.overflow = 'auto';   // Reativa a rolagem quando o menu estiver fechado
        }
    
        // Limpeza ao desmontar o componente
        return () => {
            document.body.style.overflow = 'auto'; 
        };
    }, [menuOpen]);

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
                <animated.nav style={animationProps} className={styles.menuList}>
                    {menuOpen && (
                        <FaWindowClose onClick={toggleMenu} className={styles.buttonCloseMenuMobile}/>
                    )}
                    <ul>
                        <li><Link href="/#Menu" onClick={toggleMenu}>HOME</Link></li>
                        <li><Link href="/#Presentation" onClick={toggleMenu}>SERVICES</Link></li>
                        <li><Link href="/#Tecnologies" onClick={toggleMenu}>WORK</Link></li>
                        <li><Link href="/#Insights" onClick={toggleMenu}>INSIGHTS</Link></li>
                        <li><Link href="/#Infos" onClick={toggleMenu}>COMPANY</Link></li>
                    </ul>
                </animated.nav>
            )}
        </header>
    );
}

export default MenuMobile;