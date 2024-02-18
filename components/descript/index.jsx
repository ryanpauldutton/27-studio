import React from 'react'
import styles from './style.module.scss'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation.js'
import Rounded from '../../common/RoundedButton';

export default function index() {

    const desc = "I am a Web designer based in East London, I'm addicted to creating exciting user experiences and creating interactions that give users a unique experience.";
    const description = useRef(null);
    const isInView = useInView(description)

    return(
        <div ref={description} className={styles.description}>
        <div className={styles.body}>
            <p>
            {
                desc.split(" ").map( (word, index) => {
                    return <span key={index} className={styles.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                })
            }
            </p>
            <motion.p className='text-slate-800' variants={opacity} animate={isInView ? "open" : "closed"}>I continuously immerse myself in new technologies and art styles, ensuring every interaction is not only enjoyable but also pushes the boundaries of what's possible online.</motion.p>
            <div data-scroll data-scroll-speed={0.1}>
            <a target="_blank" href ="/ryanduttoncv.pdf" download > <Rounded className={styles.button}>
                    <p>Download CV</p>
                </Rounded></a>
            </div>
        </div>
    </div>
)
}