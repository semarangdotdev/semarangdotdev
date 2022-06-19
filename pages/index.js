import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>semarang.dev</title>
        <meta name="description" content="Helping locals go global" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          Welcome to <a href="https://semarang.dev">semarang.dev!</a>
        </h1>

        <p className={styles.description}>

        </p>

        <div className={styles.grid}>
          <a href="https://tally.so/r/mD4Nrp" className={styles.card}>
            <h2>Submit CV &rarr;</h2>
            <p>Join us and work with global company.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Developers from Semarang
        </a>
      </footer>
    </div>
  )
}
