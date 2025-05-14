// components/layout/Footer.jsx

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import styles from '@/styles/components/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/logo.svg" 
                  alt="Tellper Logo"
                  width={40}
                  height={40}
                />
                <span>Tellper</span>
              </Link>
              <p className={styles.description}>
                Ваш интеллектуальный помощник для общения, который улучшает опыт обмена сообщениями во всех приложениях.
              </p>
              <div className={styles.social}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FiGithub />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FiTwitter />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FiInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
            </div>
            
            <div className={styles.footerNav}>
              <div className={styles.footerNavGroup}>
                <h3 className={styles.footerNavTitle}>Продукт</h3>
                <ul className={styles.footerNavList}>
                  <li><a href="#features">Возможности</a></li>
                  <li><a href="#howitworks">Как это работает</a></li>
                  <li><a href="#platforms">Платформы</a></li>
                  <li><a href="#usecase">Применение</a></li>
                </ul>
              </div>
              
              <div className={styles.footerNavGroup}>
                <h3 className={styles.footerNavTitle}>Ресурсы</h3>
                <ul className={styles.footerNavList}>
                  <li><Link href="/download">Скачать</Link></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#blog">Блог</a></li>
                  <li><a href="#support">Поддержка</a></li>
                </ul>
              </div>
              
              <div className={styles.footerNavGroup}>
                <h3 className={styles.footerNavTitle}>Компания</h3>
                <ul className={styles.footerNavList}>
                  <li><a href="#about">О нас</a></li>
                  <li><a href="#careers">Карьера</a></li>
                  <li><Link href="/privacy">Политика конфиденциальности</Link></li>
                  <li><Link href="/terms">Условия использования</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              &copy; {currentYear} Tellper. Все права защищены.
            </p>
            <div className={styles.footerLinks}>
              <Link href="/privacy">Политика конфиденциальности</Link>
              <Link href="/terms">Условия использования</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;