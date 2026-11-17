import { H4 } from "../../Typography"

const SrvCard = ({Image, Heading}) => {
  return (
    <div className='border border-gray-400 rounded-[8px_8px_0_0] lg:rounded-[18px_18px_0_0] overflow-hidden cursor-pointer shadow-md shadow-gray-400/55 hover:shadow-lg hover:shadow-gray-400/80 hover:-translate-y-1.5 '>
        <div className='w-full h-40 lg:h-80'>
            <img src={Image} alt={Heading} className='w-full h-full object-cover' />
        </div>
        <div className='px-2 py-2 lg:py-4 text-center'>
            <H4>{Heading}</H4>
        </div>
    </div>
  )
}

export default SrvCard