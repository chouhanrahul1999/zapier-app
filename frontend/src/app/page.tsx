import Image from "next/image";
import { Appbar } from "./components/Appbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { HeroVideo } from "./components/HeroVideo";

export default function Home() {
  return (
    <div className="">
     
     <Hero />
     <HeroVideo />
     
    </div>
  );
}
