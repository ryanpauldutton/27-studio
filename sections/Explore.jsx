'use client';

import { useState } from 'react';
import { motion as m } from 'framer-motion';
import { ExploreCard, TitleText, TypingText } from '../components'

import styles from '../styles';
import { fadeIn, slideIn, staggerContainer, textVariant } from '../utils/motion';
import { exploreWorlds } from '../constants'

const Explore = () => (
  <section className={`${styles.paddings}`}
  id="explore"
  >
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="My Work"
      textStyles="text-center" />
      <TitleText title={<>Choose the world you want
      <br className="md:block hidden" /> to Explore </>}
      textStyles="text-center" />
      </m.div>
    Explore section
  </section>
);

export default Explore;
