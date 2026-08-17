import React from 'react'
import { useProgress, Html } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="w-32 h-32 relative">
          {/* Spinning loader */}
          <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-aqua border-r-mint rounded-full animate-spin"
            style={{ animationDuration: '1s' }}
          ></div>
        </div>
        <p className="mt-4 text-white text-lg font-light">
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  )
}

export default Loader