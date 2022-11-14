import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  return <div className={styles.page}>
    <Head>
      <title>Learning Tauri</title>
      <meta name="description" content="Learning Tauri App" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="./">Main</Link>
        </li>
        <li>
          <Link href="./about">About</Link>
        </li>
      </ul>
    </nav>
    <main className={styles.main}>
      <Component {...pageProps} />
    </main>
    <footer className={styles.footer}>
      Footer
    </footer>
  </div>
}
