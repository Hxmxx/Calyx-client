'use client';

import React from 'react';
import ClientProviders from './ClientProviders';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <ClientProviders>
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <Footer />
      </main>
    </ClientProviders>
  );
}
