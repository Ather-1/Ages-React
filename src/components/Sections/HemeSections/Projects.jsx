import ProjectCard from '../../Blocks/ProjectCard.jsx';
import {H2, Btn} from '../../Typography';
import { PortfolioData } from '../../../SiteData/PortfolioData';
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const getPortfolio = PortfolioData.slice(0,4);
    const NavigateToProjects = useNavigate();
    const GoToProjects = () => {
        NavigateToProjects("/projects");
    };

    return (

        <section className='py-12 bg-fg'>
            <div className='LRP flex flex-col gap-5'>
                <div className='flex items-center justify-between'>
                    <H2 className='border-l-4 border-orange-700 pl-2'>Feature Projects</H2>
                    <div className='hidden md:block'>
                        <Btn Icon={BsArrowRightShort} onClick={GoToProjects}>
                            View All Projects
                        </Btn>
                    </div>
                </div>


                <div className='grid grid-cols-[1.4fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr] gap-2 p-2 md:p-2.5 rounded-md border border-gray-300 bg-bg'>
                    {getPortfolio.map((Prj) => {
                        return (
                            <ProjectCard 
                            key={Prj.id}
                            Image={Prj.image}
                            Title={Prj.title}
                            Site={Prj.location} />
                        )
                    })}
                </div>
                <div className='flex items-center justify-end md:hidden'>
                        <Btn Icon={BsArrowRightShort} onClick={GoToProjects}>
                            View All Projects
                        </Btn>
                </div>
            </div>
        </section>
    )
}

export default Projects