import {H1} from '../Typography.jsx';

const PagesHeroSection = ({ Image, Heading }) => {
  return (
    <section className="py-6">
      <div className="LRP h-52 md:h-64 lg:h-80 relative border border-gray-400 rounded-lg overflow-hidden">
        <div className="absolute inset-0 z-10">
          <img src={Image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50">
          <H1 Varient='Secondry'>{Heading}</H1>
        </div>
      </div>
    </section>
  );
};

export default PagesHeroSection;
