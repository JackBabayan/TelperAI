// components/sections/HowItWorks.jsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowIcon, IOSIcon, AndIcon } from "@/styles/icon";

import styles from '@/styles/sections/HowItWorks.module.scss';

const HowItWorks = () => {

  const [type, setType] = useState(1)
  const steps = [
    {
      number: '01',
      title: 'Tap and speak',
      description: "On Android, tap the floating mic button that appears above your keyboard. On iOS, use our keyboard extension's mic button.",
      imageAndroid: '/images/step-1-and.png',
      imageIOS: '/images/step-1-ios.png'
    },
    {
      number: '02',
      title: 'Tap to stop',
      description: 'After you finished your sentence, tap again to stop recording and start processing. You can record your request up to 2 minutes.',
      imageAndroid: '/images/step-2-and.png',
      imageIOS: '/images/step-2-ios.png'
    },
    {
      number: '03',
      title: 'AI Processing',
      description: 'Your voice input is processed and enhanced by advanced combination of AI technology',
      imageAndroid: '/images/step-3-and.png',
      imageIOS: '/images/step-3-ios.png'
    },
    {
      number: '04',
      title: 'Ready to Send',
      description: 'A polished, ready-to-send response appears in your text field - review and send with confidence',
      imageAndroid: '/images/step-4-and.png',
      imageIOS: '/images/step-4-ios.png'
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
            How Tellper works
          </h2>
          <p className={styles.sectionDescription}>
            Only 4 steps to improve your conversation in any application
          </p>
        </motion.div>

        <motion.div
          className={styles.sectionHeaderBtn}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >


          <h4>
            Select your device type
          </h4>
          <div className={styles.devices}>
            <div className={styles.deviceType} onClick={() => setType(1)}>
              <AndIcon />
              Android
            </div>
            <div className={styles.deviceType} onClick={() => setType(2)}>
              <IOSIcon />
              IOS
            </div>
          </div>
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
                  src={type == 1 ? step.imageAndroid : step.imageIOS}
                  alt={step.title}
                  width={300}
                  height={600}
                  className={styles.image}
                />
              </div>

              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <ArrowIcon />
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