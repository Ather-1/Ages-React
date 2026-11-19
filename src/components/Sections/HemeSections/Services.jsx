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
    <section className='py-14'>
        <div className='LRP flex flex-col gap-6'>
            <div className='flex justify-between items-end-safe pr-4'>
                <H2>Our Services</H2>
                <Btn Icon={BsArrowRightShort} onClick={GoToServices}>
                    Explore our Services
                </Btn>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 p-3 lg:p-8'>
                {GetData.map((Card) => (
                    <ServiceCard 
                        key={Card.id}
                        Image={Card.image}
                        Heading={Card.title} />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Services