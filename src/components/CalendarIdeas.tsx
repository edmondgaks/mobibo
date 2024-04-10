import Image from "next/image"

const CalendarIdeas = () => {
    return (
        <div>
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
        </div>
    )
}

export default CalendarIdeas