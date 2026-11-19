import Hero from '../components/Sections/HemeSections/Hero.jsx';
import About from '../components/Sections/HemeSections/AboutSection.jsx';
import Statistics from '../components/Sections/HemeSections/Statistics.jsx';
import Sectors from '../components/Sections/HemeSections/Sector.jsx';
import Services from '../components/Sections/HemeSections/Services.jsx';
import BlogSection from '../components/Sections/HemeSections/BlogSection.jsx';
import Projects from '../components/Sections/HemeSections/Projects.jsx';



const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Statistics />
      <Sectors />
      <Services />
      <BlogSection />
      <Projects />

    </div>
        


  )
}

export default Home