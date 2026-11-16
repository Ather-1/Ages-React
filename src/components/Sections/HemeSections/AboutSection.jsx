import { H2, H5, Para, SectionTag, Btn, List } from '../../Typography.jsx';
import Img1 from '../../../assets/Sector/8-Transmission.jpg';
import Img2 from '../../../assets/Service/6-Transportation.jpg';



const AboutSection = () => {
  return (
    <section className='py-12 md:py-14'>
        <div className='LRP grid grid-cols-1  gap-4'>

            <div className='flex flex-col gap-4 items-start p-2 '>
                <SectionTag tag={'BEYOND THE ADDRESS'} />
                <H2 className='sectionTag'>Spaces That Shape The Way We <span className='italic'>Live.</span></H2>                
                <Para>
                    AGES Consultants is a professional registered engineering firm staffed and organized to provide multi-disciplinary engineering consulting services. The name AGES is an abbreviation for “Al-Kasib Group of Engineering Services”.
                </Para>
                <div >
                    <List list={'Date of Establishment: March, 1999'} />
                    <List list={'PEC Registration No.: Consult / 1074'} />
                </div>
                <Btn className='mt-auto'>Discover Our Story</Btn>
            </div>



            <div className='grid grid-cols-3 grid-rows-3 gap-1.5 border border-gray-300 p-1.5 rounded-lg bg-fg shadow-2xl'>

                <div className='col-span-3 row-span-2 h-60  rounded-lg overflow-hidden border '>
                    <img src={Img1} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='col-span-2 row-span-1 h-28 rounded-lg overflow-hidden '>
                    <img src={Img2} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='col-span-1 row-span-1 h-28 rounded-lg flex flex-col gap-1 items-start justify-center p-3 bg-dark'>
                    <H5>98%</H5>
                    <Para className='text-txtl'>Client Satisfication.</Para>
                </div>
            </div>



        </div>  
    </section>
  )
}

export default AboutSection



// beyond the address 
// Spaces That Shape The Why We Live.
// Discover Our Story