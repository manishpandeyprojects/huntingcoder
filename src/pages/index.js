import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.mainnav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/blog"><li>Blog</li></Link>
          <Link href="/contact"><li>Contact Us</li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <div style={{textAlign: 'center'}}>
            <h1>Hunting Coder</h1>
            <p className={styles.pt2}>Blog for Hunting coders by a Hunting coder</p>
        </div>

        <div className={styles.blogs}>
          <h2>Latest blog</h2>
          <div className={styles.blogItems}>
            <h3>Best JavaScript course in 2022</h3>
            <p>Hunting coder JavaScript Course</p>
          </div>
          <div className={styles.blogItems}>
            <h3>Best JavaScript course in 2022</h3>
            <p>Hunting coder JavaScript Course</p>
          </div>
          <div className={styles.blogItems}>
            <h3>Best JavaScript course in 2022</h3>
            <p>Hunting coder JavaScript Course</p>
          </div>
          <div className={styles.blogItems}>
            <h3>Best JavaScript course in 2022</h3>
            <p>Hunting coder JavaScript Course</p>
          </div>
        </div>
        {/* <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div> */}
      </main>
    </>
  )
}
