import { H2, H5, Para, SectionTag, Btn, List } from "../../Typography.jsx";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Img1 from "../../../assets/Sectors/8-Transmission.jpg";
import Img2 from "../../../assets/Service/6-Transportation.jpg";

const AboutSection = () => {
    const NavigateToAbout = useNavigate();
    const GoToAbout = () => {
        NavigateToAbout("/about");
    };

    return (
        <section className="py-12 md:py-14">
            <div className="LRP grid grid-cols-1 lg:grid-cols-2 items-center  gap-4">
                <div className="flex flex-col gap-4 items-start p-2 ">
                    <SectionTag tag={"BEYOND THE ADDRESS"} />
                    <H2 className="sectionTag">
                        Spaces That Shape The Way We{" "}
                        <span className="font-[Merriweather] font-medium italic">
                            Live.
                        </span>
                    </H2>
                    <Para>
                        AGES Consultants is a professional registered engineering firm
                        staffed and organized to provide multi-disciplinary engineering
                        consulting services. The name AGES is an abbreviation for “Al-Kasib
                        Group of Engineering Services”.
                    </Para>
                    <div>
                        <List list={"Date of Establishment: March, 1999"} />
                        <List list={"PEC Registration No.: Consult / 1074"} />
                    </div>
                    <Btn onClick={GoToAbout} className="mt-auto" Icon={BsArrowRightShort}>
                        Discover Our Story
                    </Btn>
                </div>

                <div className="grid grid-cols-3 grid-rows-3 gap-1.5 lg:h-3/4 border border-gray-300 p-1.5 rounded-lg bg-fg shadow-2xl">
                    <div className="col-span-3 row-span-2 lg:col-span-2 lg:row-span-3 h-64 lg:h-full rounded-lg overflow-hidden border border-gray-500 ">
                        <img src={Img1} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-2 h-32 lg:h-full rounded-lg overflow-hidden border border-gray-500">
                        <img src={Img2} alt="" className="w-full h-full object-cover" />
                    </div>

                    <div className="col-span-1 row-span-1 h-32 lg:h-full rounded-lg flex flex-col gap-0.5 items-start justify-center p-3 bg-dark border border-gray-500">
                        <H5>98%</H5>
                        <Para className="text-txtl">Client Satisfication.</Para>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

// beyond the address
// Spaces That Shape The Why We Live.
// Discover Our Story
