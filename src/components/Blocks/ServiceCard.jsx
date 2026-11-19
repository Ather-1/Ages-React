import { H4 } from "../Typography"

const ServiceCard = ({Image, Heading}) => {
  return (
    <div className='group border border-gray-400 rounded-[8px_8px_0_0] lg:rounded-[18px_18px_0_0] overflow-hidden cursor-pointer shadow-md shadow-gray-400/35 hover:shadow-lg hover:shadow-gray-400/80 hover:-translate-y-1.5 transition-all duration-300'>
        <div className='w-full h-40 md:h-52 lg:h-80'>
            <img src={Image} alt={Heading} className='w-full h-full object-cover' />
        </div>
        <div className='px-2 py-2 lg:py-4 text-center group-hover:bg-black transition-bg duration-300'>
            <H4 className="group-hover:text-txtl transition-colors duration-300">{Heading}</H4>
        </div>
    </div>
  )
}

export default ServiceCard