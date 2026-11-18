import Hero from '../components/Sections/HemeSections/Hero.jsx';
import About from '../components/Sections/HemeSections/AboutSection.jsx';
import Statistics from '../components/Sections/HemeSections/Statistics.jsx';
import Sectors from '../components/Sections/HemeSections/Sector.jsx';
import Services from '../components/Sections/HemeSections/Services.jsx';
import ClientsTrust from '../components/Sections/HemeSections/ClientsTrust.jsx';
import Projects from '../components/Sections/HemeSections/Projects.jsx';



const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Statistics />
      <Sectors />
      <Services />
      <ClientsTrust />
      <Projects />

    </div>
        


  )
}

export default Home