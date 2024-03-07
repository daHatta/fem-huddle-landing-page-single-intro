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
      <body className={`${openSans.className} max-w-screen-xl min-h-full bg-violet bg-contain bg-mobile bg-center-top bg-no-repeat md:bg-cover lg:bg-desktop lg:bg-contain lg:bg-top-bottom`}>
        <div className="flex flex-col justify-center max-w-screen-xl min-h-full px-9 sm:px-[4.5rem] md:px-10 xl:px-[0] pt-[38px] sm:pt-[60px] mx-auto lg:pt-16">
          <Header />
          <main className="mt-[57px] sm:mt-[130px] md:mt-[192px] lg:mt-[100px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
