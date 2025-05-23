'use client'
import './App.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import FirstSection from './components/FirstSection/FirstSection'
import { SecondSection } from './components/SecondSection'
import { FourthSection } from './components/FourthSection'
import { Contact } from './components/Contact'
import { DevMode } from './components/DevMode'
import { useParallax } from './hooks'
import { MobileNav } from './components/MobileNav'
import { Experience } from './components/Experience'
import { useEffect } from 'react'
import { ProjectsSection } from './components/ProjectsSection'
function App() {
  const [devMode, setDevMode] = useState(true)
  const Track = async () => {
    const response = await fetch(
      'https://tracker-back-flax.vercel.app/record',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          apiKey: 'vsZ+DDa5aoAcT3FZH2Z6wsStTcStkNG1lLNnugJnjgs=',
        }),
      },
    )
    return response
  }
  useEffect(() => {
    console.log(devMode)
    try {
      Track()
    } catch (e) {
      console.log(e)
    }
  }, [])
  useParallax()
  return (
    <>
      <motion.div
        initial={{ x: 0, scale: 0 }}
        animate={{ x: 0, scale: 1 }}
        className='cont'
      >
        <div className='lines-cont'></div>
      </motion.div>
      {!devMode ? (
        <>
          <MobileNav />
          <FirstSection />
          <SecondSection />
          <Experience />
          <FourthSection />
          <ProjectsSection />
          <Contact />
        </>
      ) : (
        <DevMode setDevMode={setDevMode} />
      )}
      <div className='w-screen relative overflow-x-hidden'>
        <img
          src='/assets/black-cat.gif'
          className='z-40 fixed w-24 bottom-0 right-5'
          alt='cat'
        />
        <img
          alt='quby'
          src='/assets/quby.gif'
          className='fixed z-40 w-24 bottom-0 left-5'
        />
        <motion.img
          src='/assets/running-cat.gif'
          className='fixed w-24 bottom-0 -left-24'
          animate={{ x: '120vw' }}
          transition={{
            duration: 10,
            delay: Math.random() * 5 + 5,
          }}
        />
        <motion.img
          src='/assets/running-cat.gif'
          className='fixed w-24 bottom-0 flip right-24'
          initial={{ right: -100 }}
          animate={{ left: '-110vw' }}
          transition={{
            duration: 15,
            delay: Math.random() * 5 + 20,
          }}
        />
      </div>
    </>
  )
}

export default App
