import React, { useState, useEffect } from 'react'
import { motion } from 'motion/react'

const ProjectDetails = ({
    title,
    description, 
    subDescription, 
    image, 
    tags, 
    href,
    closeModal
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    
    // Convert image to array if it's not already
    const imageArray = Array.isArray(image) ? image : [image];
    
    // Auto slideshow effect
    useEffect(() => {
        if (isAutoPlay && imageArray.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => 
                    (prevIndex + 1) % imageArray.length
                );
            }, 2000); // Change image every 2 seconds
            
            return () => clearInterval(interval);
        }
    }, [isAutoPlay, imageArray.length]);
    
    // Manual navigation functions
    const goToPrevious = () => {
        setIsAutoPlay(false);
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1
        );
    };
    
    const goToNext = () => {
        setIsAutoPlay(false);
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % imageArray.length
        );
    };
    
    const goToSlide = (index) => {
        setIsAutoPlay(false);
        setCurrentImageIndex(index);
    };
    
    const toggleAutoPlay = () => {
        setIsAutoPlay(!isAutoPlay);
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
            <motion.div className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}>
                
                <button onClick={closeModal}
                className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10'>
                    <img src="/assets/img/close1.png" alt="" className='w-6 h-6' />
                </button>
                
                
                <div className='relative overflow-hidden rounded-t-2xl'>
                    <motion.img 
                        key={currentImageIndex}
                        src={imageArray[currentImageIndex]} 
                        alt={`${title} - Image ${currentImageIndex + 1}`} 
                        className='w-full h-64 object-cover'
                        initial={{ opacity: 0, x: 300 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                    
                    
                    {imageArray.length > 1 && (
                        <>
                            <button 
                                onClick={goToPrevious}
                                className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors'
                            >
                                <img src="/assets/img/arrowleft.png" alt="Previous" className='w-4 h-4' />
                            </button>
                            
                            <button 
                                onClick={goToNext}
                                className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors'
                            >
                                <img src="/assets/img/arrowright.png" alt="Next" className='w-4 h-4' />
                            </button>
                        </>
                    )}
                    
                    {/* Image counter */}
                    {imageArray.length > 1 && (
                        <div className='absolute top-3 left-3 bg-black/50 rounded-full px-3 py-1 text-white text-sm'>
                            {currentImageIndex + 1} / {imageArray.length}
                        </div>
                    )}
                    
                    {/* Auto-play toggle */}
                    {imageArray.length > 1 && (
                        <button 
                            onClick={toggleAutoPlay}
                            className='absolute top-3 right-20 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors'
                            title={isAutoPlay ? 'Pause slideshow' : 'Play slideshow'}
                        >
                            {isAutoPlay ? (
                                <div className='w-3 h-3 bg-white'></div> 
                            ) : (
                                <div className='w-0 h-0 border-l-4 border-l-white border-t-2 border-b-2 border-t-transparent border-b-transparent'></div> 
                            )}
                        </button>
                    )}
                </div>
                
                
                {imageArray.length > 1 && (
                    <div className='flex justify-center gap-2 py-3 bg-gradient-to-r from-midnight to-navy'>
                        {imageArray.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentImageIndex 
                                        ? 'bg-white scale-110' 
                                        : 'bg-gray-500 hover:bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                )}
                
                <div className='p-5'>
                    <h5 className='mb-2 text-2xl font-bold text-white'>{title}</h5>
                    <p className='mb-3 font-normal text-neutral-400'>{description}</p>
                    {subDescription.map((subDesc, index) => (
                        <p key={index} className='mb-3 font-normal text-neutral-400'>{subDesc}</p>
                    ))}
                    <div className='flex items-center justify-between mt-4'>
                        <div className='flex gap-3'>
                            {tags.map((tag)=> (
                                <img
                                    key={tag.id}
                                    src={tag.path}
                                    alt={tag.name}
                                    className='rounded-lg size-10 hover-animation'
                                />
                            ))}
                        </div>
                        <a 
                            href={href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='inline-flex items-center gap-1 font-medium cursor-pointer hover-animation'
                        >
                            View Project <img src="/assets/img/arrowup.png" className='size-4' />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default ProjectDetails