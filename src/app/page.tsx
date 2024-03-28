import { Sun } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex overflow-hidden flex-col justify-between w-full">
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
          <h1>Features</h1>
          <h1>Experience</h1>
          <h1>Pricing</h1>
          <h1>Trucks</h1>
          <h1>Ads Settings</h1>
          <h1>Coverage</h1>
          <h1>Order Process</h1>
        </div>
        <div>
          <button className="text-black py-2 px-3 text-sm rounded-lg bg-[#80FFAB]">Order</button>
        </div>
      </div>
      <div className="w-full bg-cover box-border h-[90vh] p-4" style={{ backgroundImage: `url('/bg-image.png')` }}>
        <h1 className="text-white font-bold text-6xl">LED TRUCK <br /> ADVERTISING</h1>
      </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 p-2 gap-2">
        <Image src={"/image1.png"} width={320} height={320} alt="image" />
        <Image src={"/image2.png"} width={320} height={320} alt="image" />
        <Image src={"/image3.png"} width={320} height={320} alt="image" />
        <Image src={"/image4.png"} width={320} height={320} alt="image" />
        <Image src={"/image5.png"} width={320} height={320} alt="image" />
        <Image src={"/image6.png"} width={320} height={320} alt="image" />
        <Image src={"/image7.png"} width={320} height={320} alt="image" />
        <Image src={"/image8.png"} width={320} height={320} alt="image" />
        <Image src={"/image9.png"} width={320} height={320} alt="image" />
        <Image src={"/image10.png"} width={320} height={320} alt="image" />
        <Image src={"/image11.png"} width={320} height={320} alt="image" />
        <Image src={"/image12.png"} width={320} height={320} alt="image" />
        <Image src={"/image13.png"} width={320} height={320} alt="image" />
        <Image src={"/image14.png"} width={320} height={320} alt="image" />
        <Image src={"/image15.png"} width={320} height={320} alt="image" />
        <Image src={"/image16.png"} width={320} height={320} alt="image" />
      </div>
      <div className="h-[70vh] bg-[#E4E4E4]">

      </div>
      <div className="h-[120vh] bg-cover bg-center bg-no-repeat box-border" style={{ backgroundImage: `url('/dreamobibo.png')` }}></div>
      <div className="h-[70vh] flex flex-col gap-14 items-center justify-center bg-[#E4E4E4]">
        <h1 className="text-lg">Test your ideas</h1>
        <div className="flex flex-row w-full justify-around">
          <Image src={"/formatinfo.png"} className="self-start" width={120} height={120} alt="car delivery" />
          <Image src={"/car.png"} width={300} height={300} alt="car delivery" />
        </div>
      </div>
    </main>
  );
}
