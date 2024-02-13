// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import React from 'react';
import styles from './qcomps/firstcomp'
import Profile from './qcomps/profile_mistake'
import Props from './qcomps/props_item';
import List from './qcomps/list_keys_id';
import Recipe from './qcomps/recipes';

export default function Home() {
  return (
    <div className={styles.main}>
        <Profile />
        <Props />
        <List />
        <Recipe />
    </div>
  )
}
