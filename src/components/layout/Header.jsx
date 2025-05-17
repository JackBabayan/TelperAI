'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import useStore from '@/store/store';
import Button from '@/components/ui/Button';
import styles from '@/styles/components/Header.module.scss';
import { usePathname, useRouter } from 'next/navigation';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isMenuOpen, toggleMenu, closeMenu, activeSection, setActiveSection } = useStore();
  const pathname = usePathname();
  const router = useRouter();


  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['/', 'features', 'howitworks', 'ourTeam', 'guides', 'contactUs'];

      const currentPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
    if (!section) return;
    if (pathname === '/' && document.getElementById(section)) {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    } else if (pathname !== '/') {
      router.push(`/?scrollTo=${section}`);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', scrollTo: 'features' },
    { name: 'How it Works', scrollTo: 'howitworks' },
    { name: 'Our Team', scrollTo: 'ourTeam' },
    { name: 'Contact us', scrollTo: 'contactUs' },
    { name: 'Guides', href: '/guides' },
  ];

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo} onClick={() => handleNavClick('/')}>
            <Image
              src="/images/logo.png"
              alt="Tellper Logo"
              width={44}
              height={150}
            />
          </Link>

          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.scrollTo || link.href} className={styles.navItem}>
                  {link.scrollTo ? (
                    <a
                      href={`#${link.scrollTo}`}
                      className={`${styles.navLink} ${activeSection === link.scrollTo ? styles.active : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.scrollTo);
                      }}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} onClick={() => handleNavClick(link.href)} className={`${styles.navLink} ${activeSection === link.href ? styles.active : ''}`}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>

            <div className={styles.mobileActions}>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSeV80zTxJLDB7sKDayf2jToCsjL4sghXYClxK6Kvq9gi-MVKA/viewform"
                variant="primary"
              >
                Join Waitlist
              </Button>
            </div>
          </nav>

          <div className={styles.actions}>
            {mounted && (
              <button
                className={styles.themeToggle}
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить темную тему'}
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </button>
            )}

            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSeV80zTxJLDB7sKDayf2jToCsjL4sghXYClxK6Kvq9gi-MVKA/viewform"
              variant="primary"
              className={styles.mobileActionsNone}
            >
              Join Waitlist
            </Button>

            <button
              className={styles.menuToggle}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;