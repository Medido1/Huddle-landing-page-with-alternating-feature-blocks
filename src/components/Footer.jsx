import logo from "../assets/images/logoFooter.svg"; 
import iconLocation from "../assets/images/icon-location.svg"; 
import phoneIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";
import facebookIcon from "../assets/images/facebook.svg"
import twitterIcon from "../assets/images/twitter.svg";
import instagramIcon from "../assets/images/instagram.svg";

function Footer() {
  return (
    <footer className="bg-[#03191F] p-4 flex flex-col">
      <img src={logo} alt="logo" className="mt-50 self-start h-8 mb-10" />
      <div className="md:flex md:justify-between">
        <div>
          <div className="flex items-start gap-4 mb-4">
            <img src={iconLocation} alt="location icon"/>
            <p className="text-gray-200 font-openSans ml-2 md:max-w-60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, consectetur cum. Aliquam minus, neque blanditiis
              vel necessitatibus id ex laborum.
            </p>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img src={phoneIcon} alt="phone icon"/>
            <p className="text-gray-200 font-openSans">
              +1-543-123-4567
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img src={emailIcon} alt="email icon" />
            <p className="text-gray-200 font-openSans">
              example@fylo.com
            </p>
          </div>
        </div>
        <div className="text-gray-200 flex flex-col gap-2 mt-10 
          text-lg md:mt-0 md:grid md:grid-cols-2 md:gap-4">
          <ul className="flex flex-col gap-2">
            <li>
              <a href="" className="cursor-pointer">About Us</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">What We Do</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">FAQ</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="" className="cursor-pointer">Career</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">Blog</a>
            </li>
            <li>
              <a href="" className="cursor-pointer">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 mt-10 self-center md:mt-0 md:self-start">
          <img src={facebookIcon} alt="facebook icon" className="cursor-pointer h-6" />
          <img src={twitterIcon} alt="twitter icon" className="cursor-pointer h-6"  />
          <img src={instagramIcon} alt="instagram icon" className="cursor-pointer h-6 "/>
        </div>
      </div>
      <p className="my-5 self-center text-white text-sm md:-mr-100">
        © copyright 2018 huddle. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;