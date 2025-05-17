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
    <footer>
      <div className={styles.footerInner}>
        <div className="container">
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/images/logo.png"
                  alt="Tellper Logo"
                  width={44}
                  height={150}
                />
              </Link>
              <p className={styles.description}>
                Tellper is an innovative AI-powered conversation assistant that enhances your messaging experience across all apps.
              </p>

            </div>

            <div className={styles.footerNav}>
              <div className={styles.footerNavGroup}>
                <h3 className={styles.footerNavTitle}>Product</h3>
                <ul className={styles.footerNavList}>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#howitworks">How it Works</a></li>
                  <li><a href="#guides">Guides</a></li>
                </ul>
              </div>

              <div className={styles.footerNavGroup}>
                <h3 className={styles.footerNavTitle}>Company</h3>
                <ul className={styles.footerNavList}>
                  <li><a href="#about">About us</a></li>
                  <li><a href="#contactUs">Contact us</a></li>
                  <li><a href="#ourTeam">Our Team</a></li>

                </ul>
              </div>

              <div className={styles.footerNavGroup}>
                <h3 className={styles.footerNavTitle}>Legal</h3>
                <ul className={styles.footerNavList}>
                  <li><Link href="/privacy">Privacy</Link></li>
                  <li><Link href="/terms">Terms</Link></li>
                </ul>
              </div>

              <div className={styles.footerNavGroup}>
                <h3 className={styles.footerNavTitle}>Social</h3>
                <ul className={styles.footerNavList}>
                  <li><a href="https://www.linkedin.com/company/tellper/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <FiLinkedin /></a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Tellper Co. LLC / All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;