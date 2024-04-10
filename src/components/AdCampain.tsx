import Image from "next/image"

const AdCampain = () => {
    return (
        <div>
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
        </div>
    )
}

export default AdCampain