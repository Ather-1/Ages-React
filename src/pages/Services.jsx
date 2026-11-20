import PageHero from '../components/Blocks/PagesHeroSection';
import BannerImg from '../assets/Banner/H1.jpg';
import {Para} from '../components/Typography.jsx';
import ServiceCARD from '../components/SiteComponents/ServiceCard.jsx';
import {ServicesData} from '../SiteData/SiteData.js';

const Services = () => {
  return (
    <section>
      <div className='border-b-2 border-gray-700'>
        <PageHero Image={BannerImg} Heading={'What We Do'} />
      </div>
      

      <section className='LRP flex flex-col gap-4 border-b border-gray-400 py-6'>
        <Para>From our specific consideration and understanding of the operational and marketing requirements of the changing era, we see our role as making a qualitative contribution through planning, design, project management and supervision.</Para>

        <Para>Experience gained on important works in various fields has enabled AGES to achieve not only engineering skills and knowledge but also sound capabilities in project management and supervision and other allied disciplines.</Para>

        <Para>AGES accordingly offers its potential in all aspects of Consulting Services with the psyche working in the background – when love and skill work together, expect a masterpiece. AGES provides consulting services in a no. of areas including Feasibility Studies, Planning, Engineering Design and Economic Appraisal, Construction Management and Supervision of all engineering projects starting from basic infrastructure development schemes to mega construction projects. An overview of AGES Scope of Services is presented as follows.</Para>
      </section>

      <section className='LRP py-8'>
        <div className='grid grid-cols-1 gap-2'>
          {ServicesData.map((service, index) => (
            <ServiceCARD 
              key={service.id}
              Number={index + 1}
              BgImg={service.image}
              Heading={service.title}
              Points={service.points}
            />
          ))}
        </div>
      </section>








    </section>
  )
}

export default Services