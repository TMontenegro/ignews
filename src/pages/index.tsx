import Head from 'next/head'

import { SubscribeTrigger } from '../components/SubscribeTrigger'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news - Home</title>
      </Head>
      
      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeTrigger />
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  )
}
