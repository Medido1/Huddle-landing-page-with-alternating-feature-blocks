import bgHeroMobile from "../assets/images/bg-hero-mobile.svg";
import bgHeroDesktop from "../assets/images/bg-hero-desktop.svg";
import mockups from "../assets/images/illustration-mockups.svg"
import logo from "../assets/images/logo.svg";
import "../App";
import { useState, useEffect } from "react";
 

function Header() {
  const [bgImg, setBgImg] = useState(null);

  useEffect(() => {
    const updateBackground = () => {
      setBgImg(window.innerWidth < 768 ? bgHeroMobile : bgHeroDesktop)
    }

    updateBackground()
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  },[])

  return (
    <header className="relative  bg-[#E6FAFB]">
      <img
        src={bgImg}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Hero background"
      />
      <div className="relative z-10 px-6 py-8 flex flex-col items-center">
        <div className="w-full flex justify-between items-center">
          <img src={logo} alt="logo" className="w-24 h-6 md:w-32" />
          <button className="bg-white rounded-xl shadow-lg p-2 md:px-12 md:py-2 ">
            Try it Free
          </button>
        </div>
        <div className="md:flex">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="font-poppins text-center md:text-left mx-auto text-2xl font-bold mt-20 ">
              Build The Community Your Fans Will Love
            </h1>
            <p className="mt-6 text-center md:text-left mx-auto font-openSans">
              Huddle re-imagines the way we build communities. You have a voice, 
              but so does your audience. 
              Create connections with your users as you engage in genuine discussion. 
            </p>
            <button className="bg-[#FF4EDC] text-white font-bold px-12 py-3 rounded-full
              mt-8 shadow-lg cursor-pointer hover:bg-[#FF94EB]">
              Get Started For Free
            </button>
          </div>
          <img 
            className="mt-14 md:w-[50%]"
            src={mockups} 
            alt="illustration mockups" />
        </div>
      </div>
    </header>
  )
}

export default Header;