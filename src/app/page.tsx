import AdCampain from "@/components/AdCampain";
import CalendarIdeas from "@/components/CalendarIdeas";
import Companies from "@/components/Companies";
import Description from "@/components/DescriptionPage";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import { Dot, Facebook, Instagram, Linkedin, MessageCircleHeart, Sun } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex overflow-hidden flex-col justify-between w-full">
      <Navbar />
      <Landing />
      <Description />
      
      <Companies />
      <CalendarIdeas />
      <AdCampain />
      <div className="h-[60vh] justify-between flex flex-col p-4 bg-[#E4E4E4]">
        <h1 className="font-semibold text-5xl text-white">If you have <br /> not found the <br /> city you are <br /> interested in</h1>
        <input type="text" placeholder="Offer your location" className="py-1 px-2 mx-auto bg-white rounded-md placeholder:text-[#C5C5C7] placeholder:text-xs" />
        <p className="text-xs text-[#7F7F83] mx-auto">and we will try to organize an advertising campaign for you there</p>
        <button className="text-white py-3 px-5 mx-auto rounded-xl bg-[#FF80FD] text-sm">Offer</button>
      </div>
      
      <Footer />
    </main>
  );
}
