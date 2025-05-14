// components/layout/Header.jsx

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from 'react-icons/fi';
import useStore from '@/store/store';
import Button from '@/components/ui/Button';
import styles from '@/styles/components/Header.module.scss';

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { isMenuOpen, toggleMenu, closeMenu, activeSection, setActiveSection } = useStore();
  
  // Хук для обработки гидратации компонента
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Обработчик прокрутки для активации секций
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'howitworks', 'platforms', 'usecase'];
      
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
  
  // Обработчик клика по навигационным ссылкам
  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
  };
  
  // Список навигационных ссылок
  const navLinks = [
    { name: 'Главная', id: 'home' },
    { name: 'Возможности', id: 'features' },
    { name: 'Как это работает', id: 'howitworks' },
    { name: 'Платформы', id: 'platforms' },
    { name: 'Применение', id: 'usecase' },
  ];
  
  // Обработчик переключения темы
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo} onClick={() => handleNavClick('home')}>
            <Image
              src="/images/logo.svg" 
              alt="Tellper Logo"
              width={40}
              height={40}
            />
            <span>Tellper</span>
          </Link>
          
          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.id} className={styles.navItem}>
                  <a
                    href={`#${link.id}`}
                    className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(link.id).scrollIntoView({ behavior: 'smooth' });
                      handleNavClick(link.id);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className={styles.mobileActions}>
              <Button 
                href="/download" 
                variant="primary"
                icon={<FiDownload />}
              >
                Скачать
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
              href="/download" 
              variant="primary"
              icon={<FiDownload />}
              className={styles.downloadBtn}
            >
              Скачать
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