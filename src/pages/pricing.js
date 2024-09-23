import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import mstyles from './index.module.css';

import React from 'react';
import { Sparkles } from 'lucide-react';
const styles = `

   .pricing{
    margin-top: 50px;
    margin-bottom: 50px;
   }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    
  }
  .pricing-header {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
  }
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .pricing-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  .pricing-card:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  .pricing-title {
    font-size: 1.45rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .pricing-price {
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .pricing-description {
    color: #666;
    margin-bottom: 1rem;
  }
  .feature-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .feature-icon {
    color: #03a94a;
    margin-right: 0.5rem;
  }
  .cta-section {
    margin-top: 4rem;
    text-align: center;
  }
  
  
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
  height: auto;
}
.hero {
    background: #fff;  
    color: #000;
    
}

.hero__title{
font-size: 4rem;
margin-top: 0;
}

.pricing-content{
padding-left: 3rem;
padding-right: 3rem;
padding-top: 1.5rem;
padding-bottom: 2.5rem
}

.pricing-card{
padding: 0
}

.card-title-wrap{
    padding: 1.5rem 2rem;
    background: #03a94a;
    color: #fff;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    text-align: center;
}
@media (max-width: 996px) {

  .navbar__inner {
    margin-top: 0px ;
  }

  div.sec1 {
    padding: 25px 40px;
  }
  div.benefit{
    width: 100%;
  }
  div.benefit-content{
    max-width:500px;
    padding: 10px 10px;
  }
}


`;

const PricingCard = ({ title, price, description, features }) => (
    <div className="pricing-card">
        <div className='card-title-wrap'>
            <h3 className="pricing-title">{title}</h3>

        </div>
        <div className='pricing-content'>
            <p className="pricing-price">{price}</p>
            <p className="pricing-description">{description}</p>
            <ul className="feature-list">
                {features.map((feature, index) => (
                    <li key={index} className="feature-item">
                        <Sparkles className="feature-icon" size={16}/>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>

    </div>
);
const PricingPage = () => {
    const pricingData = [
        {
            title: "Voice Agents",
            price: "$0.04/min",
            description: "Flat rate for all voice agent usage",
            features: ["24/7 availability", "Natural language processing", "Customizable responses"]
        },
        {
            title: "Knowledgebase Storage",
            price: "Free up to 1GB",
            description: "$0.30/GB/Month for storage above 1GB",
            features: ["1GB free storage", "Scalable solution", "Secure data management"]
        },
        {
            title: "LLM, STT, and TTS",
            price: "At Cost",
            description: "Pay only what you are charged from vendor",
            features: ["Latest AI models", "High accuracy", "Flexible integration"]
        }
    ];

    return (
        <div className="pricing">
            <style>{styles}</style>
            <div className="container">

                <h1 className="pricing-header" style={{color: '#03a94a'}}>Pricing</h1>
                <div className="pricing-grid">
                    {pricingData.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>

            </div>
        </div>
    );
};



function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', mstyles.heroBanner)} >
            <div className="container">
                <Heading as="h1" className="hero__title">
                    Pricing
                </Heading>

            </div>
        </header>
    );
}


export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`AI ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />" style={{background: "#fff"}}>
            {/*<HomepageHeader />*/}
            <main >
                <PricingPage></PricingPage>
            </main>
        </Layout>
    );
}