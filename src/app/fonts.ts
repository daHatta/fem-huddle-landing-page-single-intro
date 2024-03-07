import { Poppins, Open_Sans } from "next/font/google";

export const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    display: "swap",
});

export const openSans = Open_Sans({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});