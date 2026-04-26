import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import PremiumHero from '@site/src/components/PremiumHero';
import GlowBackground from '@site/src/components/GlowBackground';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Modern Python Learning Hub with HeroUI">
      <GlowBackground />
      <main>
        <PremiumHero />
      </main>
    </Layout>
  );
}
