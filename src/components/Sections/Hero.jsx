import { useNavigate } from 'react-router-dom';
import H1Img from '../../assets/Banner/H1.jpg';

const Hero = ({headerHeight}) => {
  const navproject = useNavigate();
  return (
    <section 
      className="h-[calc(80vh-var(--header-h))] md:h-[calc(100vh-var(--header-h))] overflow-hidden px-4 py-6 md:px-12 md:py-10"
      style={{ '--header-h': `${headerHeight + 2}px` }}>

        <div className='relative w-full h-full rounded-4xl overflow-hidden border border-gray-400'>
          
          <div className='absolute inset-0 z-0 overflow-hidden'>
            <img src={H1Img} alt="Hero Image" className='w-full h-full object-cover'/>
          </div>

          <div className='absolute inset-0 z-10 bg-black/60'></div>

          <div className='absolute inset-0 z-20 flex flex-col items-start justify-end gap-6 p-8 md:p-12'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-gray-100'>Strategic Clarity. <br />
            <span className='italic text-lime-500' >Sustainable Growth.</span></h1>

            <p className='text-lg md:text-2xl font-medium w-[90%] lg:w-[40%] text-gray-100 tracking-wider'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit earum repellat atque? Soluta, inventore eius. Voluptate ipsa nemo ullam explicabo!</p>

              <button onClick={() => {navproject('/projects'); }}
                      className='text-[16px] font-bold tracking-wider px-16 py-3.5 border border-lime-500 bg-lime-500/55 cursor-pointer'>
                Our Project
              </button>   
          </div>

        </div>


    </section>
  )
}

export default Hero