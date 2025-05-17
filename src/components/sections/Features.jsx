'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { MicIcon, SecIcon, VoesIcon, AiIcon, PhoneIcon } from "@/styles/icon";
import styles from '@/styles/sections/Features.module.scss';

const features = [
  {
    icon: <PhoneIcon />,
    title: 'Works Everywhere',
    description: 'Enhances your messaging experience across all applications – from messaging apps to emails and social media.'
  },
  {
    icon: <PhoneIcon />,
    title: 'Conversation Transformation',
    description: 'Converts your casual voice input into polished, well-structured responses.'
  },
  {
    icon: <AiIcon />,
    title: 'Context-Aware Replies',
    description: 'Generates natural, first-person responses that match your personal communication style.'
  },
  {
    icon: <VoesIcon />,
    title: 'Customizable Tone',
    description: 'Adjust response style from professional to casual based on your conversation needs.'
  },
  {
    icon: <MicIcon />,
    title: 'One-Tap Operation',
    description: 'Simply tap the mic button, speak your thoughts, and get ready-to-send messages.'
  },
  {
    icon: <SecIcon />,
    title: 'Privacy-Focused',
    description: 'Your data security is our priority with end-to-end encryption and secure API handling.'
  }
];

const Features = () => (
  <section id="features">
    <div className={styles.ycBanner}>
      Submitted to <span className={styles.yc}>Y Combinator</span>’s Summer 2025 batch.
    </div>
    <div className={styles.featuresBg}>
      <div className="container">
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.sectionLabel}>Features</span>
          <h2 className={styles.sectionTitle}>Conversation AI that works like magic</h2>
          <p className={styles.sectionDescription}>
            Powerful, AI-driven conversation assistant that helps you communicate more effectively across all your apps.
          </p>
        </motion.div >
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Features;