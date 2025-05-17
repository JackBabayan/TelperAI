'use client';

import React, { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, [searchParams]);

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