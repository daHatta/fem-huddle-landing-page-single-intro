import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="mt-14 sm:mt-[129px] lg:mt-10">
                <ul className="flex flex-row justify-center gap-x-5 md:justify-end">
                    <li><a href="#" className="flex justify-center items-center h-[40px] w-[40px] sm:h-[55px] sm:w-[55px] lg:h-[48px] lg:w-[48px] indent-[-9999px] text-base sm:text-2xl lg:text-lg text-white border-2 border-solid border-white rounded-full hover:text-soft-magenta hover:border-soft-magenta">Facebook<FaFacebookF /></a></li>
                    <li><a href="#" className="flex justify-center items-center h-[40px] w-[40px] sm:h-[55px] sm:w-[55px] lg:h-[48px] lg:w-[48px] indent-[-9999px] text-base sm:text-2xl lg:text-lg text-white border-2 border-solid border-white rounded-full hover:text-soft-magenta hover:border-soft-magenta">Twitter<FaTwitter /></a></li>
                    <li><a href="#" className="flex justify-center items-center h-[40px] w-[40px] sm:h-[55px] sm:w-[55px] lg:h-[48px] lg:w-[48px] indent-[-9999px] text-base sm:text-2xl lg:text-lg text-white border-2 border-solid border-white rounded-full hover:text-soft-magenta hover:border-soft-magenta">Instagram<FaInstagram /></a></li>
                </ul>
            </div>
            <p className="text-[11px] text-white text-center mt-8">
                Challenge by <Link className="text-soft-magenta hover:text-white" href={"https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0"} target="_blank">Frontend Mentor</Link>.
                Coded by <Link className="text-soft-magenta hover:text-white" href={"https://www.frontendmentor.io/profile/daHatta"} target="_blank">daHatta</Link>.
            </p>
        </footer>
    )
};

export default Footer;