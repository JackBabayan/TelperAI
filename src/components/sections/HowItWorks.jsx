// components/sections/HowItWorks.jsx

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/sections/HowItWorks.module.scss';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Нажмите и говорите',
      description: 'На Android нажмите плавающую кнопку микрофона, которая появляется над клавиатурой. На iOS используйте кнопку микрофона в расширении клавиатуры.',
      image: '/images/step-1.png'
    },
    {
      number: '02',
      title: 'AI обработка',
      description: 'Ваш голосовой ввод расшифровывается и улучшается нашим продвинутым искусственным интеллектом, использующим технологию DeepSeek.',
      image: '/images/step-2.png'
    },
    {
      number: '03',
      title: 'Готовое сообщение',
      description: 'Отполированный, готовый к отправке ответ появляется в вашем текстовом поле - просмотрите и отправьте с уверенностью.',
      image: '/images/step-3.png'
    }
  ];
  
  return (
    <section id="howitworks" className={styles.howItWorks}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            Как работает Tellper
          </h2>
          <p className={styles.sectionDescription}>
            Всего три простых шага для улучшения вашего общения в любом приложении
          </p>
        </motion.div>
        
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={styles.stepContent}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              
              <div className={styles.stepImage}>
                <Image 
                  src={step.image}
                  alt={step.title}
                  width={300}
                  height={600}
                  className={styles.image}
                />
              </div>
              
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6.66667V33.3333M20 33.3333L33.3333 20M20 33.3333L6.66667 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;