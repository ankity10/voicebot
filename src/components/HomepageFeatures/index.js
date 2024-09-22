import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Always Available',
    Svg: require('@site/static/img/24-hours-support.svg').default,
    description: (
      <>
          AI voice bots provide continuous, 24/7 support, ensuring instant responses to customer inquiries.
      </>
    ),
  },
  {
    title: 'Highly Scalable',
    Svg: require('@site/static/img/scale.svg').default,
    description: (
      <>
          Capable of handling multiple interactions at once, AI voice agents easily scale without the need for extra human resources.
      </>
    ),
  },
  {
    title: 'Cost Effective',
    Svg: require('@site/static/img/saving.svg').default,
    description: (
      <>
          By automating routine tasks, AI voice agents reduce operational costs and improve overall efficiency.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.h3}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
      <div className={styles.sec2}>
          <h2 className={styles.heading}>AI Voice Agents: Efficiency Redefined</h2>
          <section className={styles.features}>
              <div className="container">
                  <div className="row">
                      {FeatureList.map((props, idx) => (
                          <Feature key={idx} {...props} />
                      ))}
                  </div>
              </div>
          </section>

      </div>

  );
}
