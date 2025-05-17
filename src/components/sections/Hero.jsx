// components/sections/Hero.jsx

'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from '@/styles/sections/Hero.module.scss';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Tellper: Your conversation helper</h1>
            <p className={styles.description}>
              Tellper is an innovative AI-powered conversation assistant that enhances your messaging experience across all apps.
            </p>
            <div className={styles.actions}>
              <Button
                href="https://docs.google.com/forms/d/e/1FAIpQLSeV80zTxJLDB7sKDayf2jToCsjL4sghXYClxK6Kvq9gi-MVKA/viewform"
                variant="primary"
                size='large'
              >
                Join Waitlist
              </Button>

            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/images/logo3D.png"
              alt="Tellper Mascot"
              width={400}
              height={400}
              className={styles.mascot}
            />

            <Image
              src="/images/cloud.png"
              alt="Tellper Mascot"
              width={280}
              height={180}
              className={styles.cloudTop}
            />

            <Image
              src="/images/cloud.png"
              alt="Tellper Mascot"
              width={280}
              height={180}
              className={styles.cloud}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;