import React, { Suspense, useState } from 'react'
import OneText from '../components/OneText'
import ParallaxBackground from '../components/ParallaxBackground'
import { Canvas } from '@react-three/fiber'
import { GModel } from '../components/GModel'
import {useMediaQuery} from 'react-responsive'
import {SModel} from '../components/SModel'
import Loader from '../components/Loader'



function One() {
  const [isDragging, setIsDragging] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768});
  
  return (
    <section id="home"className='flex items-start justify-center
     md:items-start md:justify-center min-h-screen
      c-space'>
        <OneText />
        <ParallaxBackground/>
        <figure className='absolute inset-0'
        style={{
          width: "100vw",
          height: "100vh",
        }}>
        
        <Canvas >
          <Suspense fallback={<Loader/>}>

          {/*  lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 10]} 
            intensity={1.5}
            castShadow
            />
          <pointLight position={[5, 5, 5]} intensity={0.8} />
          <pointLight position={[-5, -5, 5]} intensity={0.6} />
          <hemisphereLight skyColor="#ffffff" groundColor="#444444" intensity={0.5} />
          
          <GModel 
            onDragStart={() => setIsDragging(true)} 
            onDragEnd={() => setIsDragging(false)} 
            scale={isMobile ? 0.23 : 1}
            position={isMobile ? [0, -1.5, 0] : [0, -2.5, 0]}
            />
          <SModel 
            scale={isMobile ? 5.15 : 2.25} 
            position={isMobile ? [10, 0, 1] : [3, 1, 0]}
            />
          
            </Suspense>
        </Canvas>
        
        </figure>
  </section>
  )
}

export default One