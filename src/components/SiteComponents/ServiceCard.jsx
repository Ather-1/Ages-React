import {List,} from '../Typography.jsx';

const ServiceCard = ({BgImg, Heading, Points}) => {
  return (
    <section className='relative h-60 rounded-lg overflow-hidden'>
        <div className='absolute inset-0 z-0'>
            <img src={BgImg} alt="" className='w-full h-full object-cover'/>
        </div>

        <div className='absolute inset-0 z-10 bg-black/80'></div>

        <div className='absolute inset-0 z-20 flex flex-col items-start gap-2 p-2.5'>
            <h3 className='font-[Nunito] text-[22px] font-medium text-yellow-400'>{Heading}</h3>
            <div>
                {Points.map((Point, index) => (
                    <List className='text-gray-300' key={index} list={Point} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ServiceCard
