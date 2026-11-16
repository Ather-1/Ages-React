import {H3, Para} from '../../Typography.jsx';

const SectorCard = ({Img, title, description, current, total, onNext, onPrev}) => {
  return (
    <div className='relative h-96'>

        <div className='absolute inset-0 z-0 overflow-hidden'>
            <img src={Img} alt={title} className='w-full h-full object-cover' />
        </div>

        <div className='absolute inset-0 z-10 bg-black/30'></div>



        <div className='absolute inset-0 z-20 flex flex-col items-start justify-end w-full border'>
            <div className='flex flex-col gap-1 items-start'>
                <H3>{title}</H3>
                <Para>{description}</Para>
            </div>


            <div className='flex items-center justify-between'>
                <p>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</p>
                <div className='flex items-center gap-4'>
                    <button
                        onClick={onPrev}
                        aria-label="Previous sector"
                        >←</button>
                        <button
                        onClick={onNext}
                        aria-label="Next sector"
                        >→</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectorCard
