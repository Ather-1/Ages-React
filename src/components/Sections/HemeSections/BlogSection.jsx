import BlogCard from "../../Blocks/BlogCard.jsx";
import News1 from '../../../assets/Sectors/3-Flood.jpg';
import News2 from '../../../assets/Sectors/4-FarmWater.jpg';
import News3 from '../../../assets/Sectors/11-Bridges.jpg';
import { H2, Btn } from '../../Typography.jsx';
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
    const NavigateToBlog = useNavigate();
    const GoToBlog = () => {
        NavigateToBlog("/");
    }
    const News = [
        {id: 1, Image: News1, Title:"10 Timeless Interior Design trends 2024", Date: "15 Nov 2026"},
        {id: 2, Image: News2, Title:"10 Timeless Interior Design trends 2024", Date: "15 Nov 2026"},
        {id: 3, Image: News3, Title:"10 Timeless Interior Design trends 2024", Date: "15 Nov 2026"}
    ];


    return (
        <section className="py-12">
            <div className="LRP flex flex-col gap-4">
                <div className="flex items-end justify-between">
                    <H2>Latest From <br /> Our Blog</H2>
                    <Btn Icon={BsArrowRightShort} onClick={GoToBlog}>
                        View All Articles
                    </Btn>
                </div>


                <div className="flex flex-col gap-2">
                {News.map((Data) => {
                    return (
                        <BlogCard 
                        key={Data.id}
                        NewsImg={Data.Image}
                        Title={Data.Title}
                        Date={Data.Date}/>
                    )
                })}
                </div>
            </div>
        </section>
    )
}

export default BlogSection