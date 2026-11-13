import { useNavigate } from 'react-router-dom';
import HeroImage from '../../../assets/Banner/Hero.jpeg';
import { H1, Para, Btn, Tag } from '../../Typography.jsx';


const Hero = () => {
    return (
    <section className='relative w-full h-[70vh] lg:h-[calc(100vh-var(--header-h))]' >



        <div className='absolute inset-0 overflow-hidden'>
            <img src={HeroImage} alt="Hero Image" className='w-full h-full object-cover' />
        </div>

        <div className='absolute inset-0 z-10 bg-black/70'></div>

        <div className='absolute inset-0 z-20 flex flex-col'>

            <div className='flex-1 flex flex-col justify-center items-center text-center gap-5 p-3.5 lg:p-5 lg:items-start lg:text-start lg:w-[80%] lg:gap-8'>
                <H1 className='text-light'>We Design The Path. <br /> <span className='italic text-orange-400 font-medium'>And Walk With You.</span></H1>

                <Para className='text-gray-200 lg:w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus porro natus facilis voluptate voluptatem quisquam a labore nisi.</Para>
                <Btn>See Our Projects</Btn>
            </div>
            <div className='mt-auto flex items-center justify-center gap-4 p-3.5'>
                <Tag>&bull; Precision</Tag>
                <Tag>&bull; Integrity</Tag>
                <Tag>&bull; Innovation</Tag>
            </div>
        </div>
    </section>
    )
}

export default Hero
