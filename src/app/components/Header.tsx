import Image from "next/image";

const Header = () => {
    return (
        <>
            <header className="flex justify-start sm:-mx-[6px] lg:-mx-[8px]">
                <Image className="object-contain aspect-[198/49] sm:w-[257px] lg:w-[200px] xl:w-[220px]" src={"./images/logo.svg"} width={198} height={49} alt="Logo" />
            </header>
        </>
    )
};

export default Header;