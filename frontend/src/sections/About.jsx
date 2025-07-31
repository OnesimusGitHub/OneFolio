
import {AModel} from '../components/AModel';
import { Canvas } from '@react-three/fiber';
import Card from '../components/Card';
import { useRef } from 'react';
import { Globe } from '../components/globe';
import CopyEmailButton from '../components/CopyEmailButton';
import {FrameWorks} from '../components/FrameWorks';
const About = () => {
  const grid2Container = useRef(null);
  return (
    <section id='about' className='c-space section-spacing relative'>
      <Canvas 
        className='absolute inset-0 w-full h-full pointer-events-none z-0'
        camera={{ position: [1, 10, 0], fov: 12 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient Light - Provides soft overall illumination */}
        <ambientLight intensity={0.4} />
        
        {/* Directional Light - Acts like sunlight */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow 
        />
        
        {/* Point Light - Localized light source */}
        <pointLight 
          position={[-10, 5, 10]} 
          intensity={0.6} 
          color="#ffffff" 
        />
        
        {/* Spot Light - Focused cone of light */}
        <spotLight 
          position={[0, 15, 0]} 
          intensity={0.5} 
          angle={Math.PI / 6} 
          penumbra={0.5} 
          castShadow 
        />
        
        {/* Fill Light - Reduces harsh shadows */}
        <pointLight 
          position={[15, -5, -5]} 
          intensity={0.3} 
          color="#4338ca" 
        />
        
        <group scale={2}>
          <AModel/>
        </group>
      </Canvas>
      
      <div className='relative z-10'>
        <h2 className='text-heading'>About Me</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
            {/*NUMBA WAN */}
            <div className='flex items-end grid-default-color grid-1'>
              <img src="assets/img/coding.jpg"
              className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-0 lg:scale-[2.5]'
              alt="" />
              <div className='z-10'>
                <p className='headtext'>Hi, I'm Onesimus P. Dela Cruz</p>
                <p className='subtext'>
                  Over the last three years i have done a lot of things, from being a full stack developer to being a full time lover. 
                  I have worked with various technologies and frameworks, and i am always eager to learn more. I am currently looking for new opportunities to grow and expand my skills.
                </p>
              </div>
              <div className='absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'>
              </div>

            </div>
            {/*NUMBA TWO */}
            <div className='grid-default-color grid-2'>
              <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
                <p className='flex items-end text-5xl text-gray-500'>
                  CODE LIKE CRAZY
                </p>
                <Card style={{rotate: "75deg", top: "30%", left: "20%"}}text="SOLID" containerRef={grid2Container}/>
                <Card style={{rotate: "-30deg", top: "60%", left: "45%"}}text="ANIMATIONS" containerRef={grid2Container}/>
                <Card style={{rotate: "90deg", top: "30%", left: "70%"}}text="CREATIVITY" containerRef={grid2Container}/>
                <Card style={{rotate: "-45deg", top: "55%", left: "0%"}}text="Design Patterns" containerRef={grid2Container}/>
                <Card style={{rotate: "20deg", top: "10%", left: "50%"}}text="Design Principles" containerRef={grid2Container}/>
                <Card style={{rotate: "30deg", top: "70%", left: "70%"}}image="assets/img/cs.png" containerRef={grid2Container}/>
                <Card style={{rotate: "20deg", top: "10%", left: "38%"}}image="assets/img/tailwindcss.png" containerRef={grid2Container}/>
                <Card style={{rotate: "-45deg", top: "70%", left: "25%"}}image="assets/img/vite.png" containerRef={grid2Container}/>
                <Card style={{rotate: "20deg", top: "10%", left: "3%"}}image="assets/img/neticon.png" containerRef={grid2Container}/>
                <Card style={{rotate: "20deg", top: "30%", left: "48%"}}image="assets/img/react.png" containerRef={grid2Container}/>
                
              </div>
            </div>
            {/*NUMBA THREE */}
            <div className='grid-black-color grid-3'>
              <div className='z-10 w-[50%]'>
                <p className='headtext'>Time Zone</p>
                <p className='subtext'>
                  I'm currently in the Philippines, which is full of amazing people that i would love to meet and work with.
                </p>
              </div>
              <figure className='absolute left-[30%] top-[10%]'>
                <Globe/>
              </figure>
            </div>
            {/*NUMBA FOUR */}
            <div className='grid-special-color grid-4'>
              <div className='flex flex-col items-center justify-center gap-4 size-full'>
                <p className='text-center headtext'>
                  Do you want to connect together?
                </p>
                 <CopyEmailButton/>
              </div>
            </div>
            {/*NUMBA FIVE */}
            <div className='grid-default-color grid-5'>
              <div className='z-10 w-[50%]'>
                <p className='headText'>Tech Stack</p>
                <p className='subtext'>I Specialized in some of languages, frameworks, and tools that allows me to build a robust and scalable applications</p>
              </div>
              <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                <FrameWorks/>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;