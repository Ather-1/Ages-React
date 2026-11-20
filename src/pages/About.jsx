import PageHero from '../components/Blocks/PagesHeroSection';
import BannerImg from '../assets/Banner/H1.jpg';


const About = () => {
  return (
    <div>
      <PageHero Image={BannerImg} Heading={'Behind The Team'} />
    </div>
  )
}

export default About