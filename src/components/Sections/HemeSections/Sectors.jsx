import { useState, useEffect } from 'react';
import SectorData from '../../../SiteData/SectorData.json';
import SectorCard from './SectorCard.jsx';

const Sectors = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SectorData.length)
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % SectorData.length);
  };
  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + SectorData.length) % SectorData.length);
  };

  const currentSector = SectorData[activeIndex]





  return (
    <section className='LRP py-12'>
      <div className='relative'>
        <SectorCard Img={currentSector.image} title={currentSector.title} description={currentSector.description} current={activeIndex + 1} total={SectorData.length} onNext={goNext} onPrev={goPrev} />
      </div>
    </section>
  )
}

export default Sectors
