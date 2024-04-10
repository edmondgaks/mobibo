import Image from "next/image"

const Navbar = () => {
    return (
        <div className="flex h-[10vh] flex-row px-2 w-full items-center justify-between">
        <div className="flex flex-row text-[#3C3C43] text-xs gap-4 items-center">
          <Image src={"/mobibo_logo.png"} width={80} height={80} alt="mobibo_logo" />
          <div className="p-[2px] w-[250px] flex flex-row gap-1 bg-[#F9FF8A] rounded-full items-center justify-evenly">
            <div className="bg-[#A57BFF] p-2 rounded-full  text-center">
              <h1 className="">Presentation</h1>
            </div>
            <div className="h-6 w-[1px] bg-[#C7C7CC]"></div>
            <div className="w-[30%] text-center">
              City
            </div>
            <div className="h-6 w-[1px] bg-[#C7C7CC]"></div>
            <div className="w-[30%] text-center">
              Blog
            </div>
          </div>
          <button>Features</button>
          <button>Experience</button>
          <button>Pricing</button>
          <button>Trucks</button>
          <button>Ads Settings</button>
          <button>Coverage</button>
          <button>Order Process</button>
        </div>
        <div>
          <button className="text-black py-2 px-3 text-sm rounded-lg bg-[#80FFAB]">Order</button>
        </div>
      </div>
    )
}

export default Navbar