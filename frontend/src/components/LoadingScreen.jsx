import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const LoadingScreen = ({ progress, isLoading }) => {
  const [displayProgress, setDisplayProgress] = useState(0)

  useEffect(() => {
    // Smooth progress animation
    const interval = setInterval(() => {
      setDisplayProgress(prev => {
        if (prev < progress) {
          return Math.min(prev + 1, progress)
        }
        return prev
      })
    }, 20)

    return () => clearInterval(interval)
  }, [progress])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-primary via-midnight to-navy"
        >
          {/* Animated logo or title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-aqua via-mint to-lavender bg-clip-text text-transparent">
              OneFolio
            </h1>
          </motion.div>

          {/* Progress bar container */}
          <div className="w-64 md:w-96 px-4">
            {/* Progress bar background */}
            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Progress bar fill */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-aqua via-mint to-lavender rounded-full relative"
              >
                {/* Shimmer effect */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.div>
            </div>

            {/* Progress percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-center"
            >
              <span className="text-lg md:text-xl font-light text-white/80">
                {Math.round(displayProgress)}%
              </span>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-center"
            >
              <span className="text-sm md:text-base text-white/60">
                {displayProgress < 30 && 'Initializing...'}
                {displayProgress >= 30 && displayProgress < 70 && 'Loading 3D models...'}
                {displayProgress >= 70 && displayProgress < 100 && 'Almost there...'}
                {displayProgress === 100 && 'Ready!'}
              </span>
            </motion.div>
          </div>

          {/* Animated orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-aqua/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5
              }}
              className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-lavender/20 rounded-full blur-3xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
