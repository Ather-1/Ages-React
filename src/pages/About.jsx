import PageHero from '../components/Blocks/PagesHeroSection';
import BannerImg from '../assets/Banner/H1.jpg';
import { H2, Para, List } from '../components/Typography.jsx';


const About = () => {
  return (
    <section>
      <div className='border-b border-gray-400'>
        <PageHero Image={BannerImg} Heading={'Behind The Team'} />
      </div>



    <section className='LRP flex flex-col gap-6 py-2'>
      <div className='flex flex-col items-start gap-2.5 border-b border-gray-400 py-4'>
        <H2>Introduction</H2>

        <Para><span className='font-bold text-blue-700'>AGES Consultants</span> is a professional registered engineering firm staffed and organized to provide multi-disciplinary engineering consulting services. The name AGES is an abbreviation for “Al-Kasib Group of Engineering Services”, and the term Al-Kasib being an extract from the Arabic quote  which translates to “The one who strives to earn (through fair means) is the beloved of Allah (SWT)”. This quote has a strong basis in the way AGES Consultants conducts its businesses and has been a strong driving force in the firm’s ventures.</Para>

        <div>
          <List list={"Date of Establishment: March, 1999"} />
          <List list={"PEC Registration No.: Consult / 1074"} />
        </div>

        <Para>Since its inception, AGES has in a very short span of time propelled itself to the forefront of the consulting landscape, earning a distinct reputation for its pioneering initiatives across various engineering disciplines. With a dynamic management ethos guiding its operations, the firm has managed to consistently push the envelope of engineering excellence. This ethos not only fuels AGES’ exceptional growth trajectory but also permeates throughout its dedicated team of seasoned and young professionals, fostering an environment where creativity and expertise intersect seamlessly.</Para>
      </div>



      <div className=''>
        <H2>Vision</H2>
        <Para>Professional excellence with integrity and devotion.</Para>
      </div>

      <div className=''>
        <H2>Mission</H2>
        <Para>To operate globally as a respected and credible engineering firm.</Para>
      </div>

      <div className=''>
        <H2>Core Values</H2>
        <div>
          <List list={"Responsibility to society"} />
          <List list={"Customer Satisfaction and loyalty"} />
          <List list={"Organizational and individual growth"} />
          <List list={"Technical excellence with professional ethics"} />
          <List list={"Employee dignity and self-respect"} />
        </div>
      </div>



    </section>










    </section>
  )
}

export default About