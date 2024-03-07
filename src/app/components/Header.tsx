import Image from "next/image";

const Header = () => {
    return (
        <div className="">
            <Image className="object-contain h-7 sm:h-14 w-auto lg:h-8" src={"./images/logo.svg"} width={198} height={49} alt="Logo" />
        </div>
    )
};

export default Header;