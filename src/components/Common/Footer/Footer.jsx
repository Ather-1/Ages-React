import AgesLogo from "../../../assets/AgesLogo.png";
import { Para, H6, Btn } from "../../Typography";
import { Link } from "react-router-dom";

const Footer = () => {

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Our Services', path: '/services' },
        { name: 'Our Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
    ]


    return (
        <section className="flex flex-col gap-6 p-4 bg-black">
            <div className="grid grid-cols-4 border-b border-b-gray-700 p-4">

                <div className="flex flex-col items-start gap-6 p-4 border-r border-r-gray-700">
                    <img src={AgesLogo} alt="Ages Logo" className="h-16" />
                    <Para className="text-txtl">
                        We believe great design improves the way you live. our mission is to
                        create beautiful, functional and timeless spaces.
                    </Para>
                </div>



                <div className="flex flex-col items-center justify-start text-center gap-2 p-2.5 border-r border-r-gray-700">
                    <H6 className="text-txtl">Quick Links</H6>
                    <ul className="text-txtl">
                        {quickLinks.map((links) => {
                            return (
                                <li key={links.name}>
                                    <Link to={links.path}>{links.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>



                <div className="flex flex-col items-center justify-start text-center gap-2 p-2.5 border-r border-r-gray-700">
                    <H6 className="text-txtl" >Quick Links</H6>
                    <div>
                        <Para className="text-txtl">Hello@ABC.com</Para>
                        <Para className="text-txtl">+91 1234567890</Para>
                        <Para className="text-txtl">123 design Street, <br /> Peshawar, Pakistan</Para>
                    </div>
                </div>





                <div className="flex flex-col items-start gap-2 p-2.5">
                    <H6 className="text-txtl">Newsletter</H6>
                    <div>
                        <Para className="text-txtl">Subscribe to our newsletter for the latest updates and offers.</Para>
                        <div>
                            <input type="email" name="" id="" className="bg-bg text-txtl placeholder:text-txtl" placeholder="Enter your email" />
                            <Btn variant="NavArrow">&#8599;</Btn>
                            </div>
                    </div>
                </div>

            </div>



            <div className="flex items-center justify-between rounded-md p-2.5 border border-gray-300 bg-bg">
                <Para>© 1999-2026 AGES Consultants.</Para>
                <div className="flex items-center gap-4">
                    <Para>Privicy Policy</Para>
                    <Para>Terms & Conditions</Para>
                </div>
            </div>
        </section>
    );
};

export default Footer;
