import { Sun } from "lucide-react";
import Image from "next/image";


const Description = () => {
    return (
      <div>

        <div className="flex flex-col gap-10 justify-center items-center p-4">
        <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-[#E4E4E6] text-6xl font-bold">LED TRUCK</h1>
            <p className="text-xs">Is a truck equipped <br /> with high-resolution LED screens</p>
          </div>
          <p className="text-xs">which plays</p>
          <div className="flex flex-col">
            <Image src={"/play.tv.png"} width={100} height={100} alt="play tv" />
            <p className="text-xs">video</p>
          </div>
          <div className="flex flex-col">
            <Image src={"/airpod.left.png"} width={100} height={100} alt="play tv" />
            <p className="text-xs">audio</p>
          </div>
        </div>
        <Image src={"/imageled.png"} width={400} height={400} className="" alt="image 2" />
        <div className="flex flex-row gap-4">
          <Sun size={18} />
          <div className="flex justify-center flex-col gap-2">
            <h1 className="text-sm">Bright LED technology</h1>
            <p className="text-xs text-[#8A8A8E]">Ensuring visibility <br />under any lighting conditions, <br />including bright sunlight</p>
          </div>
        </div>
      </div>
      <div className="h-[160vh] w-full flex flex-col justify-between bg-cover box-border p-4" style={{ backgroundImage: `url('/GamingConsole.png')` }}>
        <div className="flex flex-row w-full">
          <h1 className="text-sm text-[#A2CBE2] w-[50%]">You can use the LED truсk as</h1>
          <div className="text-white text-lg font-semibold">
            <p>Gaming consoles</p>
            <p>Interactive games</p>
            <p>Live streaming</p>
            <p>Live drone feed</p>
            <p>Go Pro camera</p>
            <p>iPhone screen mirror</p>
            <p>Social media stream</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-[#8D939D] text-sm">In the picture</p>
          <p className="text-white text-xs">Customers have connected <br />
            a game console and play directly <br />
            on our LED truck
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 h-[80vh] p-2">
        <div className="flex flex-row">
          <div className="flex w-[50%] flex-col gap-6">
            <p className="text-xs">We work <br /> with</p>
            <h1 className="text-6xl font-semibold">different <br />companies</h1>
          </div>
          <div>
            <p className="text-sm">Since <br /> <span className="text-base">2004</span></p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-xs">Have done advertising campaigns for industries such as:</p>
          <p className="text-base font-semibold">Cannabis</p>
          <p className="text-base font-semibold">Crypto & NFT</p>
          <p className="text-base font-semibold">Political</p>
          <p className="text-base font-semibold">Sports</p>
          <p className="text-xs">and many others</p>
        </div>
        <div className="flex flex-row">
          <div className="w-[50%]"></div>
          <div className="flex flex-col gap-1">
            <p className="text-xs">Orders executed</p>
            <p>1,450+</p>
            <p className="text-xs">Reorders</p>
            <p>350+</p>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Description