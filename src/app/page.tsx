import Link from "next/link";
import Image from "next/image";
import { poppins } from "./fonts";


export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full md:flex-row md:gap-12 xl:gap-[3.625rem]">
      <div className="md:w-[50%] xl:w-[64vw] xl:-ml-[5px] xl:-mr-[10px]">
        <Image className="object-cover aspect-[709/506] w-full h-auto" src="./images/illustration-mockups.svg" width={709} height={506} alt="Illustration Mockup" />
      </div>
      <div className="text-center mt-16 sm:mt-[7.563rem] md:w-[50%] md:mt-0 xl:w-[29vw] xl:mt-[48px]">
        <h1 className={`${poppins.className} text-white text-2xl sm:text-5xl sm:px-6 md:px-0 leading-normal sm:leading-[1.5] font-semibold md:text-4xl md:leading-relaxed md:text-left xl:w-[486px]`}>Build The Community Your Fans Will Love</h1>
        <p className="text-white text-md mt-5 sm:text-[2rem] sm:leading-[1.5] sm:mt-[1.625rem] md:text-left md:text-[1.25rem] xl:text-base xl:w-[518px]">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
        Create connections with your users as you engage in genuine discussion.</p>
        <div className="mt-8 sm:mt-12 md:text-right lg:text-left">
          <Link className={`${poppins.className} bg-white inline-block text-violet py-3 px-[5.5rem] sm:text-2xl sm:py-6 sm:px-[9.5rem] md:text-xl md:py-4 md:px-[4rem] lg:py-3 text-base rounded-full shadow-xl hover:bg-soft-magenta hover:text-white`} href={"/"}>Register</Link>
        </div>
      </div>
    </div>
  );
};
