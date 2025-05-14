// app/page.jsx

import React from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Platforms from '@/components/sections/Platforms';
import UseCase from '@/components/sections/UseCase';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Platforms />
      <UseCase />
    </>
  );
}