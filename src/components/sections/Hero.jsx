// components/sections/Hero.jsx

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import Button from '@/components/ui/Button';
import styles from '@/styles/sections/Hero.module.scss';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>
              <span className="text-gradient">Tellper:</span> Ваш умный помощник для общения
            </h1>
            
            <p className={styles.description}>
              Преобразуйте свой голосовой ввод в продуманные сообщения одним касанием. 
              Tellper работает во всех приложениях, экономя ваше время и улучшая коммуникацию.
            </p>
            
            <div className={styles.actions}>
              <Button 
                href="/download" 
                variant="primary" 
                size="large"
                icon={<FiDownload />}
              >
                Скачать бесплатно
              </Button>
              
              <Button 
                href="#howitworks" 
                variant="secondary" 
                size="large"
                icon={<FiArrowRight />}
                iconPosition="right"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('howitworks').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Как это работает
              </Button>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>500K+</span>
                <span className={styles.statLabel}>загрузок</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>4.8/5</span>
                <span className={styles.statLabel}>рейтинг</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>50M+</span>
                <span className={styles.statLabel}>сообщений</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.heroImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/hero-app.png"
                alt="Tellper App Interface"
                width={400}
                height={800}
                className={styles.phoneMockup}
              />
              
              <div className={styles.floatingElements}>
                <div className={styles.floatingElement1}>
                  <Image 
                    src="/images/feature-icon-1.svg"
                    alt="Voice Recognition"
                    width={40}
                    height={40}
                  />
                  <span>Голосовой ввод</span>
                </div>
                
                <div className={styles.floatingElement2}>
                  <Image 
                    src="/images/feature-icon-2.svg"
                    alt="AI Processing"
                    width={40}
                    height={40}
                  />
                  <span>AI обработка</span>
                </div>
                
                <div className={styles.floatingElement3}>
                  <Image 
                    src="/images/feature-icon-3.svg"
                    alt="Perfect Message"
                    width={40}
                    height={40}
                  />
                  <span>Готовое сообщение</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className={styles.heroBackground}>
        <div className={styles.backgroundGradient}></div>
        <div className={styles.backgroundPattern}></div>
      </div>
    </section>
  );
};

export default Hero;