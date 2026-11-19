import { H5, Para } from '../Typography.jsx';


const StatisticCard = ({ heading, title, description, className=''}) => {
    return (
        <div className={`flex flex-col items-start justify-center gap-2.5 md:gap-4 lg:gap-6 p-2 md:p-3 border border-gray-700 rounded-md ${className}`}>
            <H5 className='text-txtl italic'>{heading}</H5>

            <div className='flex flex-col gap-0.5 md:gap-1'>
                <Para className='text-txtl'>{title}</Para>
                <p className='text-[10px] md:text-xs text-gray-400 font-semibold tracking-wider leading-[1.2] w-[90%]'>{description}</p>
            </div>
        </div>
    )
}

export default StatisticCard
