import React from 'react'
import { useState } from 'react'
import { useEffect, useRef } from 'react'   
import ProjectDetails from './ProjectDetails'

const Project = ({
    title, 
    description, 
    subDescription, 
    href, 
    image, 
    tags, 
    setPreview,
    }) => {
    const [isHidden, setIsHidden] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const slideshowRef = useRef(null)

    const imageArray = Array.isArray(image) ? image : [image];


    useEffect(() => {
        if (isHovering && imageArray.length > 1) {
            slideshowRef.current = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length
            );
            }, 1500);
            return () => {
                if (slideshowRef.current) {
                    clearInterval(slideshowRef.current);
                }
            };
        } else {
            if (!isHovering) {
                setCurrentImageIndex(0)
            }
            if (slideshowRef.current) {
                clearInterval(slideshowRef.current);
            }
        }
    }, [isHovering, imageArray.length]);

        const handleMouseEnter = () => {
        setIsHovering(true);
        setPreview(imageArray[currentImageIndex]);
    };
    
    const handleMouseLeave = () => {
        setIsHovering(false);
        setPreview(null);
    };
    
   
    useEffect(() => {
        if (isHovering) {
            setPreview(imageArray[currentImageIndex]);
        }
    }, [currentImageIndex, isHovering, imageArray, setPreview]);


  return (
    <>
    <div className='flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0'
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >   
        <div>
        <p className='text-2xl'>{title}</p>
        <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag)=>(
                <span key={tag.id}>{tag.name}</span>
                ))}
        </div>
       
        </div>
        <button 
        onClick={() => setIsHidden(true)} 
        className='flex items-center gap-1 cursor-pointer hover-animation'
        >
            Read More
            <img src="assets/img/arrowright.png" alt="arrowright" className='w-5' />
        </button>
    </div>
    <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
    {isHidden && (
        <ProjectDetails 
        title={title}
        description={description}
        subDescription={subDescription}
        image={image}
        tags={tags}
        href={href}
        closeModal={() => setIsHidden(false)}
    />
    )}
    </>
  )
}

export default Project