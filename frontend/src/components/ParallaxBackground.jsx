import React, { useState, useEffect } from 'react'
import {motion, useScroll, useTransform, useSpring} from 'motion/react'

const ParallaxBackground = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const {scrollYProgress} = useScroll();
  const x = useSpring(scrollYProgress,{damping: 50});
  const contentlayerY = useTransform(x, [0, 0.5],["0%", "-10%"]);
  const planetLayerY = useTransform(x, [0, 0.5], ["0%", "-30%"]);
  const randomBushi1Y = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const randomBushi2Y = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-hidden'>
        {/* Parallax background image */}
        <div className='absolute inset-0 w-full h-screen -z-50'
        style={{
          backgroundImage: 'url(/assets/bgimages/galaxy.gif)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        />

        {/*PLANET LAYER*/}
        <motion.div className='absolute inset-0 -z-40'
        style={{
          backgroundImage: 'url(/assets/bgimages/saturn.png)',
          backgroundPosition: isMobile ? '110% 90%' : '120% 105%',
          backgroundSize: isMobile ? '40%' : '30%',
          backgroundRepeat: 'no-repeat',
          y: planetLayerY,
        }}/>
        {/* CONTENT LAYER */}
        <motion.div className='absolute inset-0 -z-30'
        style={{
          backgroundImage: 'url(/assets/bgimages/blackholepng.png)',
          backgroundPosition: isMobile ? '5% 25%' : '10% 35%',
          backgroundSize: isMobile ? '15%' : '10%',
          backgroundRepeat: 'no-repeat',
          y: contentlayerY,
        }}
        />

        {/*RANDOM BUSHI 2*/}
        <motion.div className='absolute inset-0 -z-20'
        style={{
          backgroundImage: 'url(/assets/bgimages/bluehole.png)',
          backgroundPosition: isMobile ? '90% 25%' : '95% 35%',
          backgroundSize: isMobile ? '15%' : '10%',
          backgroundRepeat: 'no-repeat',
          y: randomBushi1Y,
        }}/>

        {/*RANDOM BUSHI 3*/}
        <motion.div className='absolute inset-0 -z-10'
        style={{
          backgroundImage: 'url(/assets/bgimages/earthpurple.png)',
          backgroundPosition: isMobile ? '-10% 90%' : '-20% 105%',
          backgroundSize: isMobile ? '40%' : '30%',
          backgroundRepeat: 'no-repeat',
          y: randomBushi2Y,
        }}/>


        

      </div>
    </section>
  )
}

export default ParallaxBackground