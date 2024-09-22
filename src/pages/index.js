import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import img from '@site/static/img/shape.svg'

import Heading from '@theme/Heading';
import styles from './index.module.css';

const style = `

.navbar__inner{
 max-width: 1200px;
 margin-left: auto;
 margin-right: auto;
  margin-top: 30px;
}

.navbar--fixed-top {
  box-shadow: none;
}

a.navbar__brand{
  margin-right: 3rem;
}

.navbar__item{
  padding: 0 20px;
  font-size: 16px;
}

.navbar{
  height: auto
}




`

function WhyChooseUs() {

    return (
        <div className="sec1"  >
            <h3 className="heading">Why Choose Us Over DIY?</h3>
            <div className="benefits-wrap">
                <div className="benefit">
                    <div className='benefit-content'>
                        <img src='img/fast_v1.svg'></img>
                        <h4>10x Faster Deployment</h4>
                        <p>Launch production-ready voice bots in days, not months.</p>

                    </div>
                </div>
                <div className="benefit">
                    <div className='benefit-content'>
                        <img src='img/cost saving_v1.svg'></img>
                        <h4>Cost-Effective Scaling</h4>
                        <p>Pay only for what you use, avoiding upfront infrastructure costs. </p>

                    </div>

                </div>
                <div className="benefit">
                    <div className='benefit-content'>
                        <img src='img/fast_v1.svg'></img>
                        <h4>Continuous Improvement</h4>
                        <p>Regular updates to underlying models without service interruption.</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)} style={{background: "#fff",}}>
            <img className="il-left" src='img/left.svg'></img>

            <div className="container" style={{textAlign: "center"}}>
                {/*<img src="img/voice_bot_icon_v1.svg"></img>*/}
                <Heading as="h1" className="hero__title" style={{color: "#000", fontSize: '4.2rem'}}>

                    Transform Your Customer Experience with <span
                    style={{color: 'rgb(18 208 109)'}}>AI Voice Agents</span>

                </Heading>
                <p className="hero__subtitle" style={{color: "#000", maxWidth: "60%", margin: "auto"}}>
                    Automate customer interactions with AI voice agents, reducing costs and improving efficiency. Handle
                    inquiries, bookings, and more with 24/7 availability and seamless system integration.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="docs/introduction" style={{background: "#05006d", color: "#fff", fontWeight: 300}}>
                        Get Started
                    </Link>
                </div>
            </div>
            <img className="il-right" src='img/right.svg'></img>


        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
  return (
      <div>
      <style>{style}</style>
          <Layout
              title={`AI ${siteConfig.title}`}
              description="Description will go into a meta tag in <head />">
              <HomepageHeader />

              <WhyChooseUs/>

              <main>


                  <HomepageFeatures />
              </main>
          </Layout>
      </div>

  );
}
