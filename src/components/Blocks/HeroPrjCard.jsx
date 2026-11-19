import { H6 } from '../Typography.jsx';

const HeroPrjCard = ({Image, title, delay}) => {
  return (
    <div className='border border-gray-300 flex flex-col gap-1 rounded-lg overflow-hidden p-1 bg-bg anim-slide-right' style={{ animationDelay: delay }}>
        <img src={Image} alt="" className='h-22 aspect-3/1.5 rounded-lg' />
        <H6 className='pl-1 text-txtd'>{title}</H6>

    </div>
  );
};

export default HeroPrjCard

