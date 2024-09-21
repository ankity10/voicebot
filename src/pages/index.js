import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)} style={{background: "#57f99c70"}}>
        <div className="container">
            <img src="img/voice_bot_icon_v1.svg"></img>
            <Heading as="h1" className="hero__title" style={{color: "#000"}}>

                {siteConfig.title}

            </Heading>
            <p className="hero__subtitle" style={{color: "#000"}}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
                <Link
                    className="button button--secondary button--lg"
                    to="docs/introduction" style={{background: "#43d880", color: "#1c1e21b8"}}>
                    Get Started
                </Link>
            </div>
        </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`AI ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

        <HomepageFeatures />
      </main>
    </Layout>
  );
}
