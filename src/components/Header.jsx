import bgHeroMobile from "../assets/images/bg-hero-mobile.svg";
import bgHeroDesktop from "../assets/images/bg-hero-desktop.svg";
import mockups from "../assets/images/illustration-mockups.svg"
import logo from "../assets/images/logo.svg";
import "../App";
 

function Header() {
  return (
    <header className="relative  bg-[#E6FAFB]">
      <img
        src={bgHeroMobile}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Hero background"
      />
      <div className="relative z-10 px-6 py-8 flex flex-col items-center">
        <div className="w-full flex justify-between items-center">
          <img src={logo} alt="logo" className="w-24 h-6" />
          <button className="bg-white rounded-xl p-2 shadow-lg">Try it Free</button>
        </div>
        <h1 className="font-poppins text-center mx-auto text-2xl font-bold mt-20 w-70">
          Build The Community Your Fans Will Love
        </h1>
        <p className="mt-6 text-center mx-auto font-openSans">
          Huddle re-imagines the way we build communities. You have a voice, 
          but so does your audience. 
          Create connections with your users as you engage in genuine discussion. 
        </p>
        <button className="bg-[#FF4EDC] text-white font-bold px-12 py-3 rounded-full
          mt-8 shadow-lg cursor-pointer">
          Get Started For Free
        </button>
        <img 
          className="mt-14"
          src={mockups} 
          alt="illustration mockups" />
      </div>
    </header>
  )
}

export default Header;