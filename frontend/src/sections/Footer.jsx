import React from 'react'
import {mySocials} from "../constants"

const Footer = () => {
  return (
    <section className='flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space'>
        <div className='mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full'/>
            <div className='flex gap-2'>
                <p>OneFolio</p>
                <p>|</p>
                <p>Onesimus Portfolio</p>
            </div>
            <div className='flex gap-3'>
                {mySocials.map((social, index) => (
                    <a href={social.href} key={index}>
                        <img src={social.icon} alt={social.name} className='w-5 h-5' />
                    </a>
                ))}
            </div>
        <a href="https://www.youtube.com/watch?v=S9UQItTpwUQ&t=0s"><p>2025 Ali. All Rights reserved</p></a>
    </section>
  )
}

export default Footer