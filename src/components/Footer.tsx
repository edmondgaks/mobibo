import Image from "next/image"
import { Facebook, Instagram, Linkedin, MessageCircleHeart } from "lucide-react";


const Footer = () => {
    return (
        <div className="h-[40vh] bg-[#2C2C2E] w-full p-2 flex flex-col justify-between">
        <div className="flex flex-row w-[70%] justify-between">
          <div>
            <Image src={"/mobibo_logo_white.png"} width={80} height={80} alt="mobibo_logo" />
          </div>
          <div className="flex flex-col text-xs text-[#9F9FA5]">
            <p>About Us</p>
            <p>Features</p>
            <p>Experience</p>
            <p>Video</p>
            <p>Trucks</p>
            <p>Pricing</p>
            <p>Ads settings</p>
            <p>Customizable</p>
            <p>Coverage</p>
            <p>Map</p>
            <p>Order Process</p>
          </div>
          <div className="flex flex-col text-xs text-[#9F9FA5]">
            <p>About Us</p>
            <p>Features</p>
          </div>
          <div className="flex flex-col text-xs text-[#65656A]">
            <p>New York</p>
            <p>418 Broadway</p>
            <p>STE 4725 Albany, NY 12207</p>
            <p className="mt-2">(718) 635–1316</p>
            <p className="mt-2">victoria@heymobibo.com</p>
            <button className="mt-3 rounded-md w-[35%] px-3 py-2 font-semibold self-start border border-[#444449] text-[#A3A3AB] text-xs">Call</button>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white font-normal text-xs">Everything you need to know <br />before ordering advertising</p>
            <button className="bg-white p-2 rounded-full text-xs text-[#85858B] w-[45%]">Ads Blog</button>
          </div>
        </div>
        <div className="flex flex-row w-[60%] justify-between items-center">
          <div className="flex flex-row items-center gap-6 text-[#65656A] text-sm">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Linkedin color="#65656A" />
            <Facebook color="#65656A" />
            <Instagram color="#65656A" />
            <MessageCircleHeart color="#65656A" />
          </div>
        </div>
      </div>
    )
}

export default Footer