import React from 'react'
import Hero from '../components/Sections/Hero.jsx'

const Home = ({headerHeight}) => {
  return (
    <div className='flex-1 flex flex-col'>
      <Hero headerHeight={headerHeight} />

    </div>
  )
}

export default Home