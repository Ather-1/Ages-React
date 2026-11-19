import {H4, Btn} from '../Typography';

const ProjectCard = ({ Image, Title, Site }) => {
    return (
        <div className='relative h-52 lg:h-80 rounded-md overflow-hidden'>
            <div className='absolute inset-0 z-0'>
                <img src={Image} alt={''} className='w-full h-full object-cover'/>
            </div>

            <div className='absolute inset-0 z-10 bg-linear-to-t from-black to-transparent'></div>
            
            <div className='absolute inset-0 z-20 flex flex-col items-start justify-end gap-0.5 p-2'>
                <H4 className='text-txtl'>{Title}</H4>
                <div className='flex items-end justify-between w-full'>
                    <span className='text-xs md:text-sm text-gray-400'>{Site}</span>
                    <Btn variant='NavArrow' >&#8599;</Btn>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard