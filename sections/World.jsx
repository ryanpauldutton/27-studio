'use client';

import { motion as m } from 'framer-motion';
import { TitleText, TypingText } from '../components';

import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>

    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText title="/ ME VS THE WORLD"
        textStyles="text-center"
      />
      <TitleText
        title={(
          <>
            TRACK YOUR FRIENDS IN MY PORTFOLIO!
          </>
        )}
        textStyles="text-center"
      />

      <m.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-gray-300">
          <img
            src="people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/3 right-[70%] w-[70px] h-[70px] p-[6px] rounded-full bg-gray-300">
          <img
            src="people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 right-[50%] w-[70px] h-[70px] p-[6px] rounded-full bg-gray-300">
          <img
            src="people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
      </m.div>
    </m.div>
  </section>
);

export default World;
