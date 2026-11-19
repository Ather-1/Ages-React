import { H2, Btn } from '../../Typography.jsx';
import { ServicesData } from '../../../SiteData/serviceData.js';
import ServiceCard from '../../Blocks/ServiceCard.jsx';
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const Services = () => {
    const GetData  = ServicesData.slice(0, 8);
    const NavigateToServices = useNavigate();
    const GoToServices = () => {
        NavigateToServices("/services");
    };
  return (
    <section className='py-12'>
        <div className='LRP flex flex-col gap-5'>
            <div className='flex justify-between items-end-safe pr-4'>
                <H2 className='border-l-4 border-orange-700 pl-2'>Our Services</H2>
                <div className='hidden md:block'>
                    <Btn Icon={BsArrowRightShort} onClick={GoToServices}>
                        Explore our Services
                    </Btn>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
                {GetData.map((Card) => (
                    <ServiceCard 
                        key={Card.id}
                        Image={Card.image}
                        Heading={Card.title} />
                ))}
            </div>
            <div className='flex items-center justify-end md:hidden'>
                    <Btn Icon={BsArrowRightShort} onClick={GoToServices}>
                        Explore our Services
                    </Btn>
            </div>

        </div>
    </section>
  )
}

export default Services