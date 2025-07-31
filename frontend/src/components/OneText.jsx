import React from 'react'
import {FlipWords} from './FlipWords';
import {motion} from "motion/react"
const OneText = () => {
  const words = ["ASTONISHING", "CREATIVE", "MODERN", "SECURE"];
  const variants = {
    hiddeny: { opacity: 0, y: -50 },
    visibley: { opacity: 1, y: 0 },
    hiddenx: { opacity: 0, x: -50 },
    visiblex: { opacity: 1, x: 0 },
    hiddenxp: { opacity: 0, x: 50 },
    visiblexp: { opacity: 1, x: 0 }
  }
  return (
    <div className='z-10 mt-20 w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-0 md:mt-40 select-none'>
      {/*DESKTOP VIEW*/}
      <div className='flex-col hidden md:flex c-space over text-left'>
        <motion.h1 className='text-4xl font-medium'
        variants={variants}
        initial="hiddeny"
        animate="visibley"
        transition={{delay: 1.2}}
        >Hi, I'm Onesimus P. Dela Cruz</motion.h1>
        <div className='flex flex-col items-start'>
          <motion.p className='text-5xl font-medium'
          variants={variants}
          initial="hiddenx"
          animate="visiblex"
        transition={{delay: 1.4}}>A Developer <br /> Dedicated to Crafting</motion.p>
          <motion.div 
          variants={variants}
          initial="hiddenxp"
          animate="visiblexp"
          transition={{delay: 1.6}}>
            <FlipWords words={words}
            className="text-8xl font-black over"/>
          </motion.div>
          <motion.p className='text-4xl font-medium'
          variants={variants}
          initial="hiddenxp"
          animate="visiblexp"
          transition={{delay: 1.8}}>Web Solutions</motion.p>
        </div>
      </div>
      {/*MOBILE VIEW*/}
      <div className='flex flex-col md:hidden c-space over text-center'>
        <motion.h1 className='text-3xl font-medium'
        variants={variants}
        initial="hiddeny"
        animate="visibley"
        transition={{delay: 1.2}}>Hi, I'm Onesimus P. Dela Cruz</motion.h1>
        <div className='flex flex-col items-center'>
          <motion.p className='text-4xl font-medium'
          variants={variants}
          initial="hiddenx"
          animate="visiblex"
          transition={{delay: 1.4}}>A Developer <br /> Dedicated to Crafting</motion.p>
          <motion.div variants={variants}
          initial="hiddenxp"
          animate="visiblexp"
          transition={{delay: 1.6}}>
            <FlipWords words={words}
            className="text-6xl font-black over"/>
          </motion.div>
          <motion.p className='text-3xl font-medium'
          variants={variants}
          initial="hiddenxp"
          animate="visiblexp"
          transition={{delay: 1.8}}>Web Solutions</motion.p>
        </div>
      </div>
    </div>
  );
}

export default OneText