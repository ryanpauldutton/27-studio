'use client';

import { motion as m } from 'framer-motion';
import { InsightCard, TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { insights } from '../constants';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>

    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="Insight"
        textStyles="text-center"
      />
      <TitleText title="Design Insights from me"
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...
            insight}
          />
        ))}
      </div>
    </m.div>
  </section>
);

export default Insights;
