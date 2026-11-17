import {H3, Para, Btn} from '../../Typography.jsx';

const SectorCard = ({Img, title, description, current, total, onNext, onPrev}) => {
  return (
    <div className='relative h-60 rounded-md overflow-hidden shadow-lg shadow-dark border border-gray-800'>

        <div className='absolute inset-0 z-0 overflow-hidden'>
            <img src={Img} alt={title} className='w-full h-full object-cover' />
        </div>

        <div className='absolute inset-0 z-10 bg-black/75'></div>

        <div className='absolute inset-0 z-20 flex flex-col items-start justify-end gap-4 w-full px-4 py-2  '>
            <div className='flex flex-col gap-1 items-start justify-center w-full'>
                <H3>{title}</H3>
                <Para>{description}</Para>
            </div>


            <div className='flex items-center justify-between w-full'>
                <p className='text-sm text-gray-400 px-4 py-0.5 bg-bg/25 rounded-full'
                >{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</p>
                <div className='flex items-center gap-4'>
                    <Btn
                        onClick={onPrev}
                        aria-label="Previous sector">←
                    </Btn>
                    <Btn
                        onClick={onNext}
                        aria-label="Next sector">→
                    </Btn>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectorCard
