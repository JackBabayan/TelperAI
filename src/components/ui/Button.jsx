// components/ui/Button.jsx

'use client';

import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Button.module.scss';

const Button = ({ 
  children, 
  variant = 'primary', // primary, secondary, ghost
  size = 'medium', // small, medium, large
  href, 
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props 
}) => {
  const buttonClasses = `
    ${styles.button} 
    ${styles[`button-${variant}`]} 
    ${styles[`button-${size}`]}
    ${fullWidth ? styles['button-full'] : ''}
    ${className}
  `;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      
      <span className={styles.text}>{children}</span>
      
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;