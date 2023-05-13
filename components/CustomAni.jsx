'use client';

import { motion as m } from 'framer-motion';

import { textContainer, textMotion } from '../util/motion';

export const TypingText = ({ title }) => (
  <m.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white`}
  >
    {Array.from(title).map((letter, index) => (
      <m.span key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </m.span>
    ))}
  </m.p>
);

export const TitleText = ({ title }) => (
    
        <m.div
          className="container text-4xl text-slate-700 font-bold"
          initial={{ translateY: -50, opacity: 0 }}
          
          animate={{ translateY: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >{title}</m.div>
      );

      export const TextMove = ({ text }) => (
        <>
        <div className='flex py-2 relative overflow-hidden bg-slate-200'>
        <m.div
          className="relative container text-4xl text-slate-700 font-bold"
          initial={{ translateY: 0, opacity: 1 }}
          whileHover={{ translateY: 60, opacity: 1 
        //   animate={{ translateY: 60, opacity: 1 }}
        //   transition={{
        //     type: "spring",
        //     stiffness: 260,
        //     damping: 20
          }}
        >{text}</m.div>
        <m.div
          className="absolute top-[-100%] container text-4xl text-slate-700 font-bold"
          initial={{ translateY: 0, opacity: 1 }}
          animate={{ translateY: 60, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >{text}</m.div>

        </div>
        </>
      );
      
      export const TestMove = ({ text }) => (
            <m.div className='overflow-hidden flex relative' initial="rest" whileHover="hover" animate="rest">
              <m.h1 variants={textMotion}>{text}</m.h1>
              <m.div className='absolute top-[100%]'>
              <m.h1 className='font-medium' variants={textMotion}>{text}</m.h1>
              </m.div>
            </m.div>
          );
    