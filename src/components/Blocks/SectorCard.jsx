import {H3, Para, Btn} from '../Typography.jsx';

const SectorCard = ({Img, title, description, current, total, onNext, onPrev}) => {
  return (
    <div className='relative h-56 md:h-72 lg:h-[420px] rounded-md overflow-hidden shadow-lg shadow-dark border border-gray-800'>

        <div className='absolute inset-0 z-0 overflow-hidden'>
            <img src={Img} alt={title} className='w-full h-full object-cover' />
        </div>

        <div className='absolute inset-0 z-10 bg-black/75'></div>

        <div className='absolute inset-0 z-20 flex flex-col items-start justify-end gap-4 w-full p-2 md:p-3 lg:p-4  '>
            <div className='flex flex-col md:gap-1 items-start justify-center w-full'>
                <H3>{title}</H3>
                <p className='text-xs text-gray-300 font-light tracking-wider '>{description}</p>
            </div>


            <div className='flex items-center justify-between w-full'>
                <p className='text-xs lg:text-sm text-gray-400 px-3 md:px-4 py-0.5 bg-bg/25 rounded-full'
                >{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</p>
                <div className='flex items-center gap-1.5'>
                    <Btn variant='NavArrow'
                        onClick={onPrev}
                        aria-label="Previous sector">&#60;</Btn>
                    <Btn variant='NavArrow'
                        onClick={onNext}
                        aria-label="Next sector">&#62;</Btn>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectorCard
