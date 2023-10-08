'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';

export default function index({index, title, manageModal, link}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <Link className='w-full h-full flex justify-between items-center' href={link}>
            <h2>{title}</h2>
            <p>Design & Development</p>
            </Link>
        </div>
    )
}