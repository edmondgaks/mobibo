import { Dot, Facebook, Instagram, Linkedin, MessageCircleHeart, Sun } from "lucide-react";
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
        <Image src={"/image1.png"} width={320} height={320} alt="image1" />
        <Image src={"/image2.png"} width={320} height={320} alt="image2" />
        <Image src={"/image3.png"} width={320} height={320} alt="image3" />
        <Image src={"/image4.png"} width={320} height={320} alt="image4" />
        <Image src={"/image5.png"} width={320} height={320} alt="image5" />
        <Image src={"/image6.png"} width={320} height={320} alt="image6" />
        <Image src={"/image7.png"} width={320} height={320} alt="image7" />
        <Image src={"/image8.png"} width={320} height={320} alt="image" />
        <Image src={"/image9.png"} width={320} height={320} alt="image9" />
        <Image src={"/image10.png"} width={320} height={320} alt="image10" />
        <Image src={"/image11.png"} width={320} height={320} alt="image11" />
        <Image src={"/image12.png"} width={320} height={320} alt="image12" />
        <Image src={"/image13.png"} width={320} height={320} alt="image13" />
        <Image src={"/image14.png"} width={320} height={320} alt="image14" />
        <Image src={"/image15.png"} width={320} height={320} alt="image15" />
        <Image src={"/image16.png"} width={320} height={320} alt="image16" />
      </div>
      <div className="h-[80vh] p-2 gap-10 flex flex-col bg-[#E4E4E4]">
        <div className="w-[50%] text-black flex flex-row justify-between">
          <p className="font-semibold text-base">$1750</p>
          <div className="flex flex-col gap-4">
            <p className="text-xs">per day</p>
            <p>+</p>
            <p className="text-sm">discount for each subsequent day</p>
          </div>
        </div>
        <Image src={"/Calendar.png"} width={150} height={150} alt="calendar" className="mx-auto" />
        <div className="mx-auto flex flex-col">
          <p className="text-xs mx-auto">We also offer wholesale pricing on 30-60 day campaigns which starts at</p>
          <p className="mx-auto">$1250</p>
          <p className="mx-auto text-xs">per day</p>
        </div>
      </div>
      <div className="h-[120vh] bg-cover bg-center bg-no-repeat box-border" style={{ backgroundImage: `url('/dreamobibo.png')` }}></div>
      <div className="h-[90vh] flex flex-col gap-14 items-center justify-center bg-[#E4E4E4]">
        <h1 className="text-lg">Test your ideas</h1>
        <div className="flex flex-row w-full justify-evenly">
          <Image src={"/formatinfo.png"} className="" width={130} height={130} alt="car delivery" />
          <Image src={"/car.png"} width={300} className="" height={300} alt="car delivery" />
        </div>
        <div className="flex flex-col gap-2 text-[#7F7F83] text-xs">
          <p>Also</p>
          <div className="flex flex-row gap-10">
            <p>All of our trucks are</p>
            <div className="flex flex-col">
              <p className="text-black text-sm">Black</p>
              <p>and <br />unbranded</p>
              <p className="mt-6">to give you <br />maximum transparency</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full p-2 gap-10">
        <div className="flex flex-row w-full justify-between">
          <h1 className="text-xl font-bold w-[50%]">Ad campaign settings</h1>
          <div className="flex flex-row w-[50%] items-center gap-4">
            <div className="flex flex-col">
              <h1>Before</h1>
              <p className="text-xs">We’ll present you with a proposed route based on our own analysis and you’ll also be able to request specific locations as well.</p>
            </div>
            <div className="flex flex-col">
              <h1>During</h1>
              <p className="text-xs">During the campaign, you’ll receive updates and optimization suggestions from a dedicated team.</p>
            </div>
            <div className="flex flex-col">
              <h1>After</h1>
              <p className="text-xs">Post-campaign, a detailed report with GPS data, a gallery, and raw data for retargeting on social media is provided.</p>
            </div>
          </div>
        </div>
        <h1 className="text-6xl w-[53%] font-semibold">Pick a place where your target audience congregates and show them the ads</h1>
        <div className="flex flex-row w-full gap-4 mt-10">
          <div className="grid grid-cols-2 gap-1">
            <Image src={"/ads1.png"} width={250} height={250} alt="ads image" />
            <Image src={"/ads2.png"} width={250} height={250} alt="ads image" />
            <Image src={"/ads3.png"} width={250} height={250} alt="ads image" />
            <Image src={"/ads4.png"} width={250} height={250} alt="ads image" />
          </div>
          <div className="flex flex-col h-[75vh] bg-center bg-cover w-[60%] gap-1" style={{backgroundImage: `url('/map.png')`}}>
            <h1 className="text-base font-semibold">All campaign routes are fully customizable</h1>
            <div className="flex flex-col text-xs">
              <p>Date</p>
              <p>Place</p>
              <p>Duration</p>
              <p>Time</p>
              <p>etc.</p>
            </div>
            {/* <Image src={"/map.png"} width={500} height={500} alt="image of map" /> */}
          </div>
        </div>
      </div>
      <div className="flex h-[90vh]  flex-col justify-around mt-20 items-center">
        <p className="text-xs text-[#8A8A8E]">Work in</p>
        <div className="flex flex-row gap-20">
          <div>
            <Image src={"/LogoLabel.png"} width={500} height={500} alt="logo label" />
          </div>
          <div className="flex flex-row w-[50%] justify-between">
            <div className="text-[8px] text-[#8A8A8E]">
              <p className="">• New york</p>
              <p className="">• Houston</p>
              <p className="">• Phoenix (Prescott)</p>
              <p className="">• Orlando-Daytona Beach-Melbourne</p>
              <p className="">• Charlotte</p>        
              <p className="">• Charlotte</p>
              <p className="">• Nashville</p>
              <p className="">• San Antonio</p>
              <p className="">• Greenville-Spartanburg-Asheville-Anderson</p>
              <p className="">• Jacksonville</p>
              <p className="">• Birmingham (Anniston and Tuscaloosa)</p>
              <p className="">• Los Angeles</p>
              <p className="">• Atlanta</p>
              <p className="">• Tampa-St. Petersburg (Sarasota)</p>
              <p className="">• Denver</p>
              <p className="">• Raleigh-Durham (Fayettville)</p>
              <p className="">• Salt Lake City</p>
              <p className="">• Hartford & New Haven</p>
              <p className="">• Cincinatti</p>
              <p className="">• Grand Rapids-Kalamazoo-Battle Creek</p>
              <p className="">• Oklahoma City</p>
              <p className="">• Chicago</p>
              <p className="">• Boston (Manchester)</p>
              <p className="">• Seattle-Tacoma</p>
              <p className="">• Miami-Fort Lauderdale</p>
              <p className="">• Portland, OR</p>    
            </div>
            <div className="text-[8px] text-[#8A8A8E]">
              <p className="">• New york</p>
              <p className="">• Houston</p>
              <p className="">• Phoenix (Prescott)</p>
              <p className="">• Orlando-Daytona Beach-Melbourne</p>
              <p className="">• Charlotte</p>        
              <p className="">• Charlotte</p>
              <p className="">• Nashville</p>
              <p className="">• San Antonio</p>
              <p className="">• Greenville-Spartanburg-Asheville-Anderson</p>
              <p className="">• Jacksonville</p>
              <p className="">• Birmingham (Anniston and Tuscaloosa)</p>
              <p className="">• Los Angeles</p>
              <p className="">• Atlanta</p>
              <p className="">• Tampa-St. Petersburg (Sarasota)</p>
              <p className="">• Denver</p>
              <p className="">• Raleigh-Durham (Fayettville)</p>
              <p className="">• Salt Lake City</p>
              <p className="">• Hartford & New Haven</p>
              <p className="">• Cincinatti</p>
              <p className="">• Grand Rapids-Kalamazoo-Battle Creek</p>
              <p className="">• Oklahoma City</p>
              <p className="">• Chicago</p>
              <p className="">• Boston (Manchester)</p>
              <p className="">• Seattle-Tacoma</p>
              <p className="">• Miami-Fort Lauderdale</p>
              <p className="">• Portland, OR</p>    
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60vh] justify-between flex flex-col p-4 bg-[#E4E4E4]">
        <h1 className="font-semibold text-5xl text-white">If you have <br /> not found the <br /> city you are <br /> interested in</h1>
        <input type="text" placeholder="Offer your location" className="py-1 px-2 mx-auto bg-white rounded-md placeholder:text-[#C5C5C7] placeholder:text-xs" />
        <p className="text-xs text-[#7F7F83] mx-auto">and we will try to organize an advertising campaign for you there</p>
        <button className="text-white py-3 px-5 mx-auto rounded-xl bg-[#FF80FD] text-sm">Offer</button>
      </div>
      
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
    </main>
  );
}
