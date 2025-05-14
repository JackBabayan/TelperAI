// components/ui/Card.jsx

'use client';

import React from 'react';
import styles from '@/styles/components/Card.module.scss';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default', // default, feature, pricing
  icon,
  title,
  className = '',
  ...props 
}) => {
  const cardClasses = `
    ${styles.card} 
    ${styles[`card-${variant}`]} 
    ${className}
  `;
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      } 
    }
  };
  
  return (
    <motion.div 
      className={cardClasses}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUpVariants}
      {...props}
    >
      {icon && (
        <div className={styles.icon}>
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className={styles.title}>{title}</h3>
      )}
      
      <div className={styles.content}>
        {children}
      </div>
    </motion.div>
  );
};

export default Card;