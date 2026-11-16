import { useNavigate } from 'react-router-dom';
import { H1, H5, Para, Btn } from '../../Typography.jsx';
import HeroPrjCard from './HeroPrjCard.jsx';
import HeroImage from '../../../assets/Banner/H3.jpg';
import HCard1 from '../../../assets/Portfolio/2-Jabori.jpg';
import HCard2 from '../../../assets/Portfolio/5-Diamer-Basha.jpg';
import HCard3 from '../../../assets/Portfolio/4-Mohmand.jpg';
// h-[70vh]

const Hero = () => {
    const navigateToProject = useNavigate();
    const gotoProject = () => {
        navigateToProject('/projects');
    }
    return (
    <section className='relative w-full h-[70vh] lg:h-[calc(100vh-var(--header-h))] bg-amber-300'>
        <div className='absolute inset-0 z-0 bg-amber-950'>
            <img src={HeroImage} alt="Hero Image" className='w-full h-full object-cover' />
        </div>
        <div className='absolute inset-0 z-10 bg-black/65'></div>
        
        <div className='absolute inset-0 z-20 grid grid-cols-1 lg:grid-cols-2'>

            <div className='flex flex-col gap-5 items-start justify-center lg:justify-end p-3.5 lg:p-6 anim-slide-up' style={{ animationDelay: '1.5s' }}>
                <H1 className='text-txtl italic'>Build & growth <br /> with scalable tools</H1>
                <Para className='w-[90%] text-txtl'>Easily adapt to changes and scale your operatiions with our flexible infrastructure, designed to support to support your business growth.</Para>
                <div className='flex items-center gap-8'>
                    <Btn onClick={gotoProject}  >Our Projects</Btn>
                    <Btn>Watch Video</Btn>
                </div>
            </div>


            <div className='hidden lg:flex flex-col gap-4 items-end-safe justify-center-safe p-8'>
                <HeroPrjCard Image={HCard2} title={'Bahsa hydropower project'} delay={'0.2s'} />
                <HeroPrjCard Image={HCard1} title={'Jabori hydropower project'} delay={'0.8s'} />
                <HeroPrjCard Image={HCard3} title={'Mohmand hydropower project'} delay={'1.2s'} />
            </div>
        </div>




        
        
    </section>
    )
}

export default Hero