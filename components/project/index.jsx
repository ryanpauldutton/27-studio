'use client';
import React from 'react'
import styles from './style.module.css';

export default function index({link, index, title, setModal}) {

    return (
        <a className={styles.link} href={`projects/${link}`}>
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            
            <h2>{title}</h2>
            <p>Design & Development</p>
            
        </div>
        </a>
    )
}