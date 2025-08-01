import React from 'react'
import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'
const Experiences = () => {
  return (
    <div id='exp' className='w-full'>
      <Timeline data={experiences} />
    </div>
  )
}

export default Experiences