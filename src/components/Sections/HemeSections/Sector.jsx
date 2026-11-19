import { useState, useEffect } from "react";
import { SectorData } from '../../../SiteData/SectorData.js';
import SectorCard from '../../Blocks/SectorCard.jsx';
import {H2} from '../../Typography.jsx';

const Sector = () => {
    const [current, setCurrent] = useState(0);
    const sectors = SectorData[current];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % SectorData.length)
        }, 4000);
        return () => clearInterval(interval)
    }, []);

    const NextSlider = () => {
        setCurrent((prev) => (prev + 1) % SectorData.length) 
    }
    const PrevSlider = () => {
        setCurrent((prev) => (prev - 1 + SectorData.length) % SectorData.length)
    }

    if (!sectors) return null;

    return (
        <section className="py-12">
            <div className="LRP flex flex-col gap-3">
                <div className="">
                    <H2 className="border-l-3 border-orange-700 pl-1">Our Sectors</H2>
                </div>
                <div>
                    <SectorCard 
                        Img={sectors.image} 
                        title={sectors.title}
                        description={sectors.description}
                        current={current + 1}
                        total={SectorData.length}
                        onNext={NextSlider}
                        onPrev={PrevSlider} />
                </div>
            </div>
        </section>
    )
}

export default Sector