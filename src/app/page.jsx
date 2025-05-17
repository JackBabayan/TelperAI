// app/page.jsx

import React from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Team />
      <Contact />
    </>
  );
}