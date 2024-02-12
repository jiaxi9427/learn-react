// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import React from 'react';
import styles from './qcomps/firstcomp'
import Profile from './qcomps/profile_mistake'

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
    </div>
  )
}
