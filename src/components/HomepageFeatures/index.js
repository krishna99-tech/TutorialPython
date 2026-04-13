import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Beginner Friendly',
    description: (
      <>
        Start from scratch with zero prior knowledge. Our step-by-step guides 
        make Python easy and fun to learn.
      </>
    ),
  },
  {
    title: 'Code Examples',
    description: (
      <>
        Every lesson comes with production-ready code samples. Copy, run, 
        and modify them to see real results in seconds.
      </>
    ),
  },
  {
    title: 'Project Ready',
    description: (
      <>
        From automation scripts to GUI apps and database management, we cover 
        the tools you need for real-world development.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center padding-horiz--md', styles.featureCard)}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
