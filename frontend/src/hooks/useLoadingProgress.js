import { useState, useEffect } from 'react'
import { useProgress } from '@react-three/drei'

export const useLoadingProgress = () => {
  const { progress, loaded, total } = useProgress()
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    // Update loading progress
    setLoadingProgress(progress)

    // Check if loading is complete
    if (progress === 100) {
      // Add a small delay before hiding the loading screen for smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [progress])

  return {
    isLoading,
    progress: loadingProgress,
    loaded,
    total
  }
}
