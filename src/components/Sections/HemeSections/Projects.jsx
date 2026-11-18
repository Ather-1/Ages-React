import PrjCard from './PrjCard';
import {H2, Btn} from '../../Typography';
import { PortfolioData } from '../../../SiteData/PortfolioData';

const Projects = () => {
    const getPortfolio = PortfolioData.slice(0,4);
    return (

        <section className='py-12 bg-fg'>
            <div className='LRP flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <H2>Feature Projects</H2>
                    <Btn>View All</Btn>
                </div>


                <div className='grid grid-cols-[1.4fr_1fr] lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-2 p-2 md:p-2.5 rounded-md border border-gray-300 bg-bg'>
                    {getPortfolio.map((Prj) => {
                        return (
                            <PrjCard 
                            key={Prj.id}
                            Image={Prj.image}
                            Title={Prj.title}
                            Site={Prj.location} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Projects