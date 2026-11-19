import AgesLogo from "../../../assets/AgesLogo.png";
import { Para, H6, Btn, FooterHeading } from "../../Typography";
import { Link } from "react-router-dom";
import NavLinks from '../Header/Menu';

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
            <div className="grid grid-cols-2 grid-rows-3 gap-1 lg:grid-cols-4 lg:grid-rows-1 border-b border-b-gray-700 lg:p-4">

                <div className="col-span-2 row-span-1 flex flex-col items-center text-center gap-6 p-4 lg:border-r border-r-gray-700">
                    <img src={AgesLogo} alt="Ages Logo" className="h-16" />
                    <Para className="text-txtl">
                        We believe great design improves the way you live. our mission is to
                        create beautiful, functional and timeless spaces.
                    </Para>
                </div>



                <div className="col-span-1 row-span-1 flex flex-col items-center justify-start text-center gap-2 p-2.5 border-r border-r-gray-700">
                    <FooterHeading>Quick Links</FooterHeading>
                    <ul className="flex flex-col gap-0.5 text-xs font-medium tracking-wider text-gray-400">
                        {quickLinks.map((links) => {
                            return (
                                <li key={links.name}>
                                    <Link to={links.path}>{links.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>



                <div className="col-span-1 row-span-1 flex flex-col items-center justify-start text-center gap-2 p-2.5 lg:border-r border-r-gray-700">
                    <FooterHeading>Contact Us</FooterHeading>
                    <ul className="flex flex-col gap-1 text-xs font-medium tracking-wider text-gray-400">
                        <li>Hello@ABC.com</li>
                        <li>+91 1234567890</li>
                        <li>123 design Street, <br /> Peshawar, Pakistan</li>
                    </ul>
                </div>





                <div className="col-span-2 row-span-1 flex flex-col items-start gap-2 p-2.5">
                    <FooterHeading>Newsletter</FooterHeading>
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
