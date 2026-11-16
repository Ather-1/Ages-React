import {H2, Para, Btn} from '../../Typography.jsx';
import StatCard from './StatCard.jsx';




const Statistics = () => {
    return (
        <section className='py-12 border bg-dark'>
            <div className='LRP border flex flex-col gap-4'>
                <div className=''>
                    <H2 className='text-txtl'>Building Space <br /> That Tell <span className='font-[Merriweather] font-light italic'>Stories</span></H2>
                </div>


                <div className='border border-gray-700 rounded-lg grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2 lg:gap-4 p-2 lg:p-4'>
                    <div className='col-span-1 row-span-1'></div>
                    <StatCard className='col-span-1 row-span-1' heading={'20K+'} title={'Satisfied clients'} description={"Our satisfied clients are testament to our quality,creativity, and commitment"} />
                    <StatCard className='col-span-1 row-span-1' heading={'25+'} title={'Years Experience'} description={"Our satisfied clients are testament to our quality,creativity, and commitment"} />
                    <StatCard className='col-span-1 row-span-1' heading={'99%'} title={'Client Satisfication'} description={"Our satisfied clients are testament to our quality,creativity, and commitment"} />
                    <StatCard className='col-span-1 row-span-1' heading={'300+'} title={'Real Estate sales'} description={"Our satisfied clients are testament to our quality,creativity, and commitment"} />
                    <div className='flex flex-col gap-2 items-start justify-center'>
                        <p className='text-[10px] md:text-xs text-gray-400 font-semibold tracking-wider leading-[1.2] md:w-[90%]'>We blend design, technology, and trust to connent people with spaces they'll love.</p>
                        <Btn>Read More</Btn>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Statistics
