// components/sections/UseCase.jsx

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiGlobe, FiClock } from 'react-icons/fi';
import styles from '@/styles/sections/UseCase.module.scss';

const UseCase = () => {
  const useCases = [
    {
      icon: <FiBriefcase />,
      title: 'Для профессионалов',
      description: 'Создавайте отполированные деловые коммуникации на ходу',
      image: '/images/usecase-professional.jpg'
    },
    {
      icon: <FiBook />,
      title: 'Для студентов',
      description: 'Генерируйте хорошо структурированные ответы для академических дискуссий',
      image: '/images/usecase-student.jpg'
    },
    {
      icon: <FiGlobe />,
      title: 'Для иностранцев',
      description: 'Улучшите вашу коммуникацию с грамматически правильными, естественно звучащими сообщениями',
      image: '/images/usecase-international.jpg'
    },
    {
      icon: <FiClock />,
      title: 'Для занятых людей',
      description: 'Экономьте время, говоря вместо печатания, и позвольте нашему ИИ усовершенствовать ваше сообщение',
      image: '/images/usecase-busy.jpg'
    }
  ];
  
  return (
    <section id="usecase" className={styles.useCase}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            Идеально подходит для
          </h2>
          <p className={styles.sectionDescription}>
            Tellper помогает разным пользователям улучшить их повседневное общение
          </p>
        </motion.div>
        
        <div className={styles.useCaseGrid}>
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className={styles.useCaseCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.useCaseImage}>
                <Image 
                  src={useCase.image}
                  alt={useCase.title}
                  width={400}
                  height={300}
                  className={styles.image}
                />
                <div className={styles.useCaseIcon}>
                  {useCase.icon}
                </div>
              </div>
              
              <div className={styles.useCaseContent}>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDescription}>{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={styles.callToAction}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.ctaContent}>
            <h2>Готовы преобразить свое общение?</h2>
            <p>Скачайте Tellper сегодня и трансформируйте способ коммуникации во всех ваших приложениях!</p>
            
            <div className={styles.downloadOptions}>
              <a href="/download#android" className={styles.downloadButton}>
                <Image 
                  src="/images/google-play-badge.png"
                  alt="Скачать из Google Play"
                  width={180}
                  height={53}
                />
              </a>
              
              <a href="/download#ios" className={styles.downloadButton}>
                <Image 
                  src="/images/app-store-badge.png"
                  alt="Скачать из App Store"
                  width={180}
                  height={53}
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCase;