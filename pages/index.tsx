import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import MainLayout from '@/src/Layout'
import HomeBanner from '@/src/Components/HomeBanner'
import Services from '@/src/Components/Services'
import Blogslider from '@/src/Components/Blogslider'
import AboutSection from '@/src/Components/About'
import BlogSection from '@/src/Components/Blog'
import HappyClients from '@/src/Components/Clients'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    document.body.style.setProperty('--primary', '#10266b')
    document.body.style.setProperty('--secondary', '#464545')
    document.body.style.setProperty('--light', '#1F357D')
    document.body.style.setProperty('--dark', '#04185B')
  })
  return (
    <>

      <main className={styles.main}>
        <HomeBanner />
        <AboutSection />
        <Services />
        <HappyClients />
        <BlogSection />

        {/* <Blogslider /> */}
      </main>
    </>
  )
}

Home.layout = MainLayout;