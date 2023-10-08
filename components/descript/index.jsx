import React from 'react'
import styles from './style.module.scss'
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation.js'
import Rounded from '../../common/RoundedButton';

export default function index() {

    const desc = "I am a graphic and web designer based in East London,I like to make new and interesting designs that excite the user";
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
            <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p>
            <div data-scroll data-scroll-speed={0.1}>
            <a href ="/rdcv.pdf" download > <Rounded className={styles.button}>
                    <p>About me</p>
                </Rounded></a>
            </div>
        </div>
    </div>
)
}