'use client';

import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { ExploreCard, TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setactive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`}
      id="explore"
    >
      <m.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="My Work"
          textStyles="text-center"
        />
        <TitleText title={(
          <>Choose the world you want
            <br className="md:block hidden" /> to Explore
          </>
        )}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setactive}
            />
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default Explore;
