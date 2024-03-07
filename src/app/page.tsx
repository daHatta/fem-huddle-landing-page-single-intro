import Link from "next/link";
import Image from "next/image";
import { poppins } from "./fonts";


export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full md:flex-row md:gap-12">
      <div className="md:w-[50%] lg:w-[59vw]">
        <Image className="object-cover w-full h-auto" src={"./images/illustration-mockups.svg"} width={709} height={506} alt="Illustration Mockup" />
      </div>
      <div className="text-center mt-16 sm:mt-[8rem] md:w-[50%] md:mt-8 lg:w-[41vw]">
        <h1 className={`${poppins.className} text-white text-2xl sm:text-5xl sm:px-6 md:px-0 leading-normal sm:leading-snug font-semibold md:text-4xl md:leading-relaxed md:text-left`}>Build The Community Your Fans Will Love</h1>
        <p className="text-white text-md mt-5 sm:text-[2rem] sm:mt-7 md:text-left md:text-[1.25rem]">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
        Create connections with your users as you engage in genuine discussion.</p>
        <div className="mt-8 sm:mt-12 md:text-left">
          <Link className={`${poppins.className} bg-white inline-block text-violet py-3 px-[5.5rem] sm:px-[8rem] md:px-[4rem] text-md rounded-full shadow-xl hover:bg-soft-magenta hover:text-white`} href={"/"}>Register</Link>
        </div>
      </div>
    </div>
  );
};
