import { useNavigate } from 'react-router-dom';
import HeroImage from '../../../assets/Banner/H3.jpg';
import HCard1 from '../../../assets/Portfolio/2-Jabori.jpg';
import HCard2 from '../../../assets/Portfolio/5-Diamer-Basha.jpg';
import HCard3 from '../../../assets/Portfolio/4-Mohmand.jpg';
import { H1, H5, Para, Btn } from '../../Typography.jsx';
// h-[70vh]

const Hero = () => {
    return (
    <section className='relative w-full h-[60vh] lg:h-[calc(100vh-var(--header-h))] bg-amber-300'>
        <div className='absolute inset-0 z-0 bg-amber-950'>
            <img src={HeroImage} alt="Hero Image" className='w-full h-full object-cover' />
        </div>
        <div className='absolute inset-0 z-10 bg-black/65'></div>
        
        <div className='absolute inset-0 z-20 grid grid-cols-1 lg:grid-cols-2'>

            <div className='border border-amber-50 flex flex-col gap-5 items-start justify-end-safe p-3.5 lg:p-6'>
                <H1 className='text-txtl italic'>Build & growth <br /> with scalable tools</H1>
                <Para className='w-[90%] text-txtl'>Easily adapt to changes and scale your operatiions with our flexible infrastructure, designed to support to support your business growth.</Para>
                <div className='flex items-center gap-8'>
                    <Btn>Our Projects</Btn>
                    <Btn>Watch Video</Btn>
                </div>
            </div>


            <div className='hidden lg:flex flex-col gap-4 items-end-safe justify-center-safe p-8'>
                <div className='border border-gray-300 flex flex-col gap-1 rounded-lg overflow-hidden p-1 bg-bg'>
                    <img src={HCard1} alt="" className='h-22 aspect-3/1.5 rounded-lg' />
                    <H5 className='pl-1 text-txtd'>Jabori hydropower project</H5>
                </div>
            
                <div className='border border-gray-300 flex flex-col gap-1 rounded-lg overflow-hidden p-1 bg-bg'>
                    <img src={HCard2} alt="" className='h-22 aspect-3/1.5 rounded-lg' />
                    <H5 className='pl-1 text-txtd'>Bahsa hydropower project</H5>
                </div>
                
                <div className='border border-gray-300 flex flex-col gap-1 rounded-lg overflow-hidden p-1 bg-bg'>
                    <img src={HCard3} alt="" className='h-22 aspect-3/1.5 rounded-lg' />
                    <H5 className='pl-1 text-txtd'>Mohmand hydropower project</H5>
                </div>
            </div>



        </div>




        
        
    </section>
    )
}

export default Hero




{/* <div className='w-full h-full grid grid-cols-[1.2fr_1fr] gap-2.5 rounded-xl overflow-hidden'>

            <div className='border border-gray-300 rounded-xl flex flex-col items-start justify-center gap-4 p-8 bg-fg'>
                <H1>Build & growth <br />with scalable tools</H1>
                <Para className='w-[90%]'>Easily adapt to changes and scale your operatiions with our flexible infrastructure, designed to support to support your business growth.</Para>
                <div>
                    <Btn>Our Projects</Btn>
                    <Btn>Our Projects</Btn>
                </div>
            </div>
            
            <div className='border border-gray-300 rounded-xl overflow-hidden'>
                <img src={HeroImage} alt=""  className='w-full h-full object-center'/>
            </div>

        </div> */}