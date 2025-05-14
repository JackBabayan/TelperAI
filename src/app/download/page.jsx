// app/download/page.jsx

'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { AiFillAndroid, AiFillApple } from 'react-icons/ai';
import Button from '@/components/ui/Button';
import styles from '@/styles/pages/Download.module.scss';

// Клиентский компонент для содержимого
function DownloadContent() {
  const [selectedPlatform, setSelectedPlatform] = useState('android');
  const searchParams = useSearchParams();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Проверяем хэш в URL
    const hash = window.location.hash.substring(1);
    if (hash === 'android' || hash === 'ios') {
      setSelectedPlatform(hash);
    }
    // Проверяем query параметры
    const platform = searchParams.get('platform');
    if (platform === 'android' || platform === 'ios') {
      setSelectedPlatform(platform);
    }

    // Предзагрузка изображений
    const preloadImages = async () => {
      const imageUrls = [
        '/images/android-mockup.png',
        '/images/ios-mockup.png',
        '/images/android-qr.png',
        '/images/ios-qr.png'
      ];

      try {
        await Promise.all(
          imageUrls.map(url => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.onload = resolve;
              img.onerror = resolve; // Разрешаем промис даже при ошибке
              img.src = url;
            });
          })
        );
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Все равно устанавливаем true, чтобы показать контент
      }
    };

    preloadImages();
  }, [searchParams]);

  const platforms = {
    android: {
      icon: <AiFillAndroid />,
      name: 'Android',
      description: 'Интуитивная плавающая кнопка микрофона для Android устройств.',
      requirements: 'Android 8.0 или выше',
      version: '1.5.2',
      size: '15 MB',
      image: '/images/android-mockup.png',
      qrCode: '/images/android-qr.png',
      downloadUrl: 'https://play.google.com/store',
      features: [
        'Работает во всех приложениях для обмена сообщениями',
        'Интеграция с клавиатурой Android',
        'Поддержка голосовых команд',
        'Настраиваемые жесты для активации',
        'Оптимизировано для экономии заряда батареи'
      ]
    },
    ios: {
      icon: <AiFillApple />,
      name: 'iOS',
      description: 'Удобное расширение клавиатуры для iOS устройств.',
      requirements: 'iOS 14.0 или выше',
      version: '1.5.3',
      size: '18 MB',
      image: '/images/ios-mockup.png',
      qrCode: '/images/ios-qr.png',
      downloadUrl: 'https://apps.apple.com',
      features: [
        'Совместимость со всеми приложениями iOS',
        'Расширение клавиатуры iOS',
        'Поддержка Siri Shortcuts',
        'Интеграция с системным микрофоном',
        'Энергоэффективный дизайн'
      ]
    }
  };

  if (!imagesLoaded) {
    return <LoadingFallback />;
  }

  return (
    <div className={styles.downloadPage}>
      <div className="container">
        <motion.div 
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Скачайте Tellper</h1>
          <p>Выберите вашу платформу и начните общаться лучше уже сегодня</p>
          
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
        
        <motion.div 
          className={styles.downloadContent}
          key={selectedPlatform}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.downloadInfo}>
            <div className={styles.platformSpecs}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Версия</span>
                <span className={styles.specValue}>{platforms[selectedPlatform].version}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Размер</span>
                <span className={styles.specValue}>{platforms[selectedPlatform].size}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Требования</span>
                <span className={styles.specValue}>{platforms[selectedPlatform].requirements}</span>
              </div>
            </div>
            
            <h2>Tellper для {platforms[selectedPlatform].name}</h2>
            <p className={styles.platformDescription}>{platforms[selectedPlatform].description}</p>
            
            <ul className={styles.featureList}>
              {platforms[selectedPlatform].features.map((feature, index) => (
                <li key={index}>
                  <span className={styles.featureIcon}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className={styles.downloadActions}>
              <Button 
                href={platforms[selectedPlatform].downloadUrl} 
                target="_blank"
                rel="noopener noreferrer"
                variant="primary" 
                size="large"
                icon={<FiDownload />}
              >
                Скачать для {platforms[selectedPlatform].name}
              </Button>
              
              <div className={styles.qrCode}>
                <Image
                  src={platforms[selectedPlatform].qrCode}
                  alt={`QR код для скачивания Tellper для ${platforms[selectedPlatform].name}`}
                  width={120}
                  height={120}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span>Сканируйте для скачивания</span>
              </div>
            </div>
          </div>
          
          <div className={styles.downloadImage}>
            <Image
              src={platforms[selectedPlatform].image}
              alt={`Tellper для ${platforms[selectedPlatform].name}`}
              width={300}
              height={600}
              className={styles.phoneImage}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </motion.div>
        
        <div className={styles.installInstructions}>
          <h2>Инструкция по установке</h2>
          
          {selectedPlatform === 'android' ? (
            <ol className={styles.instructionSteps}>
              <li>Скачайте приложение из Google Play Store</li>
              <li>Откройте приложение Tellper</li>
              <li>Следуйте инструкциям по настройке на экране</li>
              <li>Предоставьте необходимые разрешения для микрофона</li>
              <li>Начните использовать Tellper в любом приложении для обмена сообщениями</li>
            </ol>
          ) : (
            <ol className={styles.instructionSteps}>
              <li>Скачайте приложение из App Store</li>
              <li>Откройте приложение Tellper</li>
              <li>Следуйте инструкциям по настройке на экране</li>
              <li>Включите расширение клавиатуры Tellper в настройках iOS</li>
              <li>Предоставьте необходимые разрешения для микрофона</li>
              <li>Начните использовать Tellper в любом приложении для обмена сообщениями</li>
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}

// Компонент загрузки
function LoadingFallback() {
  return (
    <div className={styles.downloadPage}>
      <div className="container">
        <div className={styles.loadingState}>
          <h1>Загрузка...</h1>
        </div>
      </div>
    </div>
  );
}

// Основной компонент страницы
export default function Download() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DownloadContent />
    </Suspense>
  );
}