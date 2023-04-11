import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <>
      <style jsx>
        {`
      h1{
        font-size: 50px;
      }
      h2{
        font-size: 38px;
      }
      h3{
        font-size: 24px;
      }
      p{
        font-size: 16px;
      }
      `}
      </style>

      <main className={styles.main}>
        <div className={styles.blogs}>

          <div className={styles.blogItems}>
            <Link href={'/blogpost/javascript-course'}> <h3>Best JavaScript course in 2022</h3></Link>
            <p>Hunting coder JavaScript Course</p>
          </div>
          <div className={styles.blogItems}>
            <Link href={'/blogpost/javascript-course'}> <h3>Best JavaScript course in 2022</h3></Link>
            <p>Hunting coder JavaScript Course</p>
          </div>
          <div className={styles.blogItems}>
            <Link href={'/blogpost/javascript-course'}> <h3>Best JavaScript course in 2022</h3></Link>
            <p>Hunting coder JavaScript Course</p>
          </div>
          <div className={styles.blogItems}>
            <Link href={'/blogpost/javascript-course'}> <h3>Best JavaScript course in 2022</h3></Link>
            <p>Hunting coder JavaScript Course</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Blog
