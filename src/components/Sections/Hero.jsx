import React from 'react'
import { H1, H5, Para } from '../Common/Typography.jsx';
import Btn from "../Common/Btn.jsx";
import HeroImg from '../../assets/Banner/H1.jpg'
import Herotag from './HeroTags.jsx'

const Hero = () => {
  return (
    <section className='w-full h-[75%] lg:h-screen  relative'>
      <div className='absolute inset-0 z-0'>
        <img src={HeroImg} alt="Hero Image" className='w-full h-full object-cover' />
      </div>

      <div className='absolute inset-0 z-10 bg-black/80'></div>
      
      <div className='absolute inset-0 z-20 flex flex-col items-center justify-center '>

          <div className='h-full flex flex-col items-center justify-center text-center gap-6 pt-20'>
            <H1>Engineering Progress <br /> Across Borders <br /> <span className='italic text-blue font-light'>Since 1995.</span></H1>
            <Para className='w-[75%]'>
              AGES Consultants is a professional registered engineering firm staffed and organized to provide multi-disciplinary engineering consulting services. The name AGES is an abbreviation for “Al-Kasib Group of Engineering Services”.
            </Para>
            <div className='flex gap-12'>
              <Btn>See Our projects</Btn>
              <Btn variant='secondry'>See Our projects</Btn>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-2 text-center pb-4'>
            <Herotag tag="Certified Engineers" />
            <Herotag tag="Global Infrastructure" />
            <Herotag tag="Sustainable Innovation" />
            <Herotag tag="Turnkey Solutions" />

          </div>

      </div>
      
    </section>
  )
}

export default Hero
