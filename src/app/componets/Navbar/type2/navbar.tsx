import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import LanguageSwitcher from "../../LanguageSwitcher"

interface NavbarProps {
    nameLogo: string;
    links: {
        label: string;
        href: string;
    }[];
    backgroundColor?: string;
    textColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({
    nameLogo,
    links,
    backgroundColor = '#1e3a8a',
    textColor = '#f1f5f9',
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [active, setActive] = useState(false);

    const responsiveMenu = () => {
        setActive(!active);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.navbar} ${isVisible ? styles.visible : ''}`}
            style={{ backgroundColor, color: textColor }}
        >
            <h1>{nameLogo}</h1>
            <div
                className={`${styles.contentLinks} ${active ? styles.show : ''}${isVisible ? '' : styles.contentLinks} `}
            >
                <ul className={styles.navLinks}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} style={{ color: textColor }}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <LanguageSwitcher />
                </ul>
            </div>
            
            <button className={styles.amButton} onClick={responsiveMenu}>
                <div
                    className={`${styles.pin} ${active ? styles.active1 : ''} `}
                ></div>
                <div
                    className={`${styles.pin} ${active ? styles.active2 : ''}`}
                ></div>
                <div
                    className={`${styles.pin} ${active ? styles.active3 : ''}`}
                ></div>
            </button>
        </nav>
    );
};

export default Navbar;
