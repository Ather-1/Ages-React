import {List,} from '../Typography.jsx';

const ServiceCard = ({Number, BgImg, Heading, Points}) => {
  return (
    <section className='relative h-60 rounded-lg overflow-hidden'>
        <div className='absolute inset-0 z-0'>
            <img src={BgImg} alt="" className='w-full h-full object-cover'/>
        </div>

        <div className='absolute inset-0 z-10 bg-black/80'></div>

        <div className='absolute inset-0 z-20  px-3 py-2.5'>
            <span className='text-[10px] text-yellow-100'>
                {String(Number).padStart(2, '0')}
            </span>

            <div className='flex flex-col items-start gap-2'>
                <h3 className='font-[Nunito] text-[22px] font-medium text-yellow-300'>{Heading}</h3>
                <div>
                    {Points.map((Point, index) => (
                        <List className='text-gray-300' key={index} list={Point} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceCard
