import type { Metadata } from "next";
import "./css/globals.css";
import { openSans } from "./fonts";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Frontend Mentor | Huddle landing page with single introductory section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"></link>
      <body className={`${openSans.className} max-w-screen-2xl text-base bg-violet bg-contain bg-mobile bg-center-top bg-no-repeat md:bg-cover lg:bg-desktop lg:h-screen lg:bg-cover lg:bg-top-center`}>
        <div className="flex flex-col justify-center max-w-screen-xl min-h-full px-9 sm:px-[4.75rem] md:px-10 lg:px-16 xl:px-[80px] pt-[38px] sm:pt-[65px] mx-auto lg:pt-16 xl:pt-[54px]">
          <Header />
          <main className="mt-[57px] sm:mt-[119px] md:mt-[152px] lg:mt-[100px] xl:mt-[86px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
