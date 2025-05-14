// components/sections/Features.jsx

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiLink, FiMessageSquare, FiSliders, FiUserCheck, FiShield, FiZap } from 'react-icons/fi';
import Card from '@/components/ui/Card';
import styles from '@/styles/sections/Features.module.scss';

const Features = () => {
  const features = [
    {
      icon: <FiLink />,
      title: 'Работает везде',
      description: 'Используйте Tellper во всех ваших приложениях для обмена сообщениями, электронной почты и социальных сетей.'
    },
    {
      icon: <FiMessageSquare />,
      title: 'Трансформация диалогов',
      description: 'Превращает ваш голосовой ввод в хорошо структурированные, грамматически правильные сообщения.'
    },
    {
      icon: <FiUserCheck />,
      title: 'Умные ответы',
      description: 'Создаёт естественные ответы от первого лица, соответствующие вашему персональному стилю общения.'
    },
    {
      icon: <FiSliders />,
      title: 'Настраиваемый тон',
      description: 'Регулируйте стиль сообщений от профессионального до повседневного в зависимости от ситуации.'
    },
    {
      icon: <FiZap />,
      title: 'Простота использования',
      description: 'Просто нажмите кнопку микрофона, скажите что хотите и получите готовое для отправки сообщение.'
    },
    {
      icon: <FiShield />,
      title: 'Конфиденциальность',
      description: 'Ваши данные надёжно защищены с помощью сквозного шифрования и безопасной обработки API.'
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            Ключевые возможности
          </h2>
          <p className={styles.sectionDescription}>
            Tellper использует передовые AI технологии, чтобы сделать вашу коммуникацию более эффективной
          </p>
        </motion.div>
        
        <motion.div 
          className={styles.featuresGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                variant="feature"
                icon={feature.icon}
                title={feature.title}
              >
                <p>{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;