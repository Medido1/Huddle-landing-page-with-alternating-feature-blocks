import bgHeroMobile from "../assets/images/bg-hero-mobile.svg";
import bgHeroDesktop from "../assets/images/bg-hero-desktop.svg";
import logo from "../assets/images/logo.svg";
import "../App";
 

function Header() {
  return (
    <header className="relative h-[500px] bg-[#E6FAFB]">
      <img
        src={bgHeroMobile}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="Hero background"
      />
      <div className="relative z-10 px-6 py-8">
        <div className="flex justify-between items-center">
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
      </div>
    </header>

  )
}

export default Header;