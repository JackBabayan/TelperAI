'use client';

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/sections/Team.module.scss';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Vitali Sargsyan',
    role: 'Co-founder / CEO',
    image: '/images/Vito.jpg',
    description: 'Visionary leader and product strategist.'
  },
  {
    name: 'Saro Babayan',
    role: 'Co-founder / CTO',
    image: '/images/Saro.jpg',
    description: 'Senior full-stack development and mobile apps.'
  },
  {
    name: 'Angelika Sahakyan',
    role: 'Senior Android Developer',
    image: '/images/Anjelka.jpg',
    description: 'Specialist in Android development and mobile apps.'
  }
];

const Team = () => (
  <section id="ourTeam" className={styles.teamSection}>
    <div className="container">
      <motion.div 
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={styles.sectionTitle}>Meet our team</h2>
        <p className={styles.sectionDescription}>We are passionate about making communication smarter and easier for everyone.</p>
      </motion.div>
      <div className={styles.teamGrid}>
        {team.map((member, idx) => (
          <motion.div 
            className={styles.teamMember} 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className={styles.avatarWrapper}>
              <Image src={member.image} alt={member.name} width={120} height={120} className={styles.avatar} />
            </div>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.description}>{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team; 