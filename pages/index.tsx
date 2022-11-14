import { invoke } from '@tauri-apps/api/tauri'
import Head from 'next/head'
import Link from 'next/link'
import {NextPage} from "next";
import {useEffect, useState} from "react";

import styles from '../styles/Home.module.css'

const Home:NextPage = function Home() {
  const [greet, setGreet] = useState('Set');

  useEffect(() => {
    invoke('greet', {name: 'World'})
      .then((resolve) => {
        setGreet(JSON.stringify(resolve));
      }).catch((error) => {
        console.error(JSON.stringify(error));
      })
  }, [])

  return (
    <div>
      <h1 className={styles.title}>
        { greet }
      </h1>

      <p>
        <Link href={"/about"}>About</Link>
      </p>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </div>
  )
}


export default Home;
