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
    font-size: 1.25rem;
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
  
`;

const PricingCard = ({ title, price, description, features }) => (
    <div className="pricing-card">
        <h3 className="pricing-title">{title}</h3>
        <p className="pricing-price">{price}</p>
        <p className="pricing-description">{description}</p>
        <ul className="feature-list">
            {features.map((feature, index) => (
                <li key={index} className="feature-item">
                    <Sparkles className="feature-icon" size={16} />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);
const PricingPage = () => {
    const pricingData = [
        {
            title: "Voice Bots",
            price: "$0.04/min",
            description: "Flat rate for all voice bot usage",
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
            price: "At cost",
            description: "Pay only for what you use",
            features: ["Latest AI models", "High accuracy", "Flexible integration"]
        }
    ];

    return (
        <div className="pricing">
            <style>{styles}</style>
            <div className="container">
                <h1 className="pricing-header">Simple, Transparent Pricing</h1>
                <div className="pricing-grid">
                    {pricingData.map((plan, index) => (
                        <PricingCard key={index} {...plan} />
                    ))}
                </div>

            </div>
        </div>
    );
};

// const styles = {
//     container: {
//         maxWidth: '800px',
//         margin: '0 auto',
//         padding: '20px',
//         fontFamily: 'Arial, sans-serif',
//         textAlign: 'center',
//     },
//     header: {
//         fontSize: '36px',
//         marginBottom: '20px',
//         color: '#333',
//     },
//     section: {
//         marginBottom: '40px',
//     },
//     subHeader: {
//         fontSize: '28px',
//         marginBottom: '10px',
//         color: '#555',
//     },
//     description: {
//         fontSize: '18px',
//         color: '#666',
//         marginBottom: '10px',
//     },
//     ctaSection: {
//         marginTop: '50px',
//         backgroundColor: '#f0f4f8',
//         padding: '20px',
//         borderRadius: '8px',
//     },
//     ctaHeader: {
//         fontSize: '24px',
//         marginBottom: '15px',
//         color: '#333',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '18px',
//         backgroundColor: '#007BFF',
//         color: '#fff',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
// };


//
// const PricingPage = () => {
//     return (
//         <div style={styles.container}>
//             <h1 style={styles.header}></h1>
//
//             {/* Voice Bots Pricing */}
//             <section style={styles.section}>
//                 <h2 style={styles.subHeader}>Voice Bots</h2>
//                 <p style={styles.description}>Voice bots are charged at a flat rate of <strong>$0.04/min</strong>.</p>
//             </section>
//
//             {/* Knowledgebase Pricing */}
//             <section style={styles.section}>
//                 <h2 style={styles.subHeader}>Knowledgebase Storage</h2>
//                 <p style={styles.description}>Each account comes with <strong>1 GB of free</strong> knowledgebase storage.</p>
//                 <p style={styles.description}>For storage above 1 GB, it's <strong>$0.30/GB/Month</strong>.</p>
//             </section>
//
//             {/* LLMs STT and TSS Pricing */}
//             <section style={styles.section}>
//                 <h2 style={styles.subHeader}>LLM, Speech to Text and Text to Speech</h2>
//                 <p style={styles.description}>You will be charged <strong>at cost</strong> for LLM, speech to text and text to speech models</p>
//             </section>
//
//         </div>
//     );
// };
//



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
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <PricingPage></PricingPage>
            </main>
        </Layout>
    );
}