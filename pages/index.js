import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 classname={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in vel optio, exercitationem necessitatibus ad, sit laborum esse accusantium ducimus voluptates harum officia? Perspiciatis aliquam accusantium quas, magnam ea libero.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in vel optio, exercitationem necessitatibus ad, sit laborum esse accusantium ducimus voluptates harum officia? Perspiciatis aliquam accusantium quas, magnam ea libero.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in vel optio, exercitationem necessitatibus ad, sit laborum esse accusantium ducimus voluptates harum officia? Perspiciatis aliquam accusantium quas, magnam ea libero.</p>
      <Link href="/contact"><a className={styles.btn}>See Contact Page</a></Link>
    </div>
  )
}
