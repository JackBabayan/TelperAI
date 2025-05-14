// components/sections/Platforms.jsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSmartphone, FiTablet } from 'react-icons/fi';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import Button from '@/components/ui/Button';
import styles from '@/styles/sections/Platforms.module.scss';

const Platforms = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('android');
  
  const platforms = {
    android: {
      icon: <AiFillAndroid />,
      name: 'Android',
      description: 'Интуитивная плавающая кнопка микрофона для Android устройств',
      features: [
        'Работает во всех приложениях для обмена сообщениями',
        'Интеграция с клавиатурой Android',
        'Поддержка голосовых команд',
        'Настраиваемые жесты для активации',
        'Оптимизировано для экономии заряда батареи'
      ],
      image: '/images/android-mockup.png',
      downloadUrl: '/download#android'
    },
    ios: {
      icon: <AiFillApple />,
      name: 'iOS',
      description: 'Удобное расширение клавиатуры для iOS устройств',
      features: [
        'Совместимость со всеми приложениями iOS',
        'Расширение клавиатуры iOS',
        'Поддержка Siri Shortcuts',
        'Интеграция с системным микрофоном',
        'Энергоэффективный дизайн'
      ],
      image: '/images/ios-mockup.png',
      downloadUrl: '/download#ios'
    }
  };
  
  return (
    <section id="platforms" className={styles.platforms}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            Доступно на всех платформах
          </h2>
          <p className={styles.sectionDescription}>
            Tellper работает как на Android, так и на iOS устройствах
          </p>
          
          <div className={styles.platformSelector}>
            <button 
              className={`${styles.platformButton} ${selectedPlatform === 'android' ? styles.active : ''}`}
              onClick={() => setSelectedPlatform('android')}
            >
              <AiFillAndroid />
              <span>Android</span>
            </button>
            
            <button 
              className={`${styles.platformButton} ${selectedPlatform === 'ios' ? styles.active : ''}`}
              onClick={() => setSelectedPlatform('ios')}
            >
              <AiFillApple />
              <span>iOS</span>
            </button>
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedPlatform}
            className={styles.platformContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.platformInfo}>
              <div className={styles.platformIcon}>
                {platforms[selectedPlatform].icon}
              </div>
              
              <h3 className={styles.platformName}>
                Tellper для {platforms[selectedPlatform].name}
              </h3>
              
              <p className={styles.platformDescription}>
                {platforms[selectedPlatform].description}
              </p>
              
              <ul className={styles.platformFeatures}>
                {platforms[selectedPlatform].features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <span className={styles.featureIcon}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                href={platforms[selectedPlatform].downloadUrl} 
                variant="primary"
                icon={<FiSmartphone />}
              >
                Скачать для {platforms[selectedPlatform].name}
              </Button>
            </div>
            
            <div className={styles.platformImage}>
              <Image 
                src={platforms[selectedPlatform].image}
                alt={`Tellper for ${platforms[selectedPlatform].name}`}
                width={300}
                height={600}
                className={styles.mockupImage}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
      </div>
    </section>
  );
};

export default Platforms;