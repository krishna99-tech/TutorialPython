import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import { Rocket, Package, Braces, Database } from 'lucide-react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Master Python <br/>
          <span className="gradient-text">From Scratch to Pro</span>
        </Heading>
        <p className="hero__subtitle">
          The most comprehensive, 45-module curriculum designed to take you from 
          beginner to advanced Python architecture.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning Python 🐍
          </Link>
        </div>
      </div>
    </header>
  );
}

const CurriculumSummary = () => (
  <section className={styles.curriculumSection}>
    <div className="container">
      <div className="text--center margin-bottom--xl">
        <Heading as="h2">Structured for Success</Heading>
        <p>A proven path divided into logical milestones.</p>
      </div>
      <div className="row">
        {[
          { Icon: Rocket, title: 'The Basics', desc: 'Variables, Syntax, Controls' },
          { Icon: Package, title: 'Data Structures', desc: 'Lists, Dicts, Tuples' },
          { Icon: Braces, title: 'OOP & Modern', desc: 'Classes, Match, Lambdas' },
          { Icon: Database, title: 'Advanced', desc: 'SQL, Files, VirtualEnv' }
        ].map((item, i) => (
          <div key={i} className="col col--3">
            <div className={styles.curriculumCard}>
              <div className={styles.curriculumIcon}>
                <item.Icon size={48} strokeWidth={1.5} color="var(--ifm-color-primary)" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Modern Python Learning Hub">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CurriculumSummary />
      </main>
    </Layout>
  );
}
