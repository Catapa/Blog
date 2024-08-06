import Image from "next/image";
import { ArrowBackIcon, ArrowFrontIcon } from "../icons";
import { CategoryTag } from "../common";
import "./HeroCarousel.css";


const HeroCarousel = () => {
    return (
        <section className="relative flex items-end w-full h-[75dvh]">
            <Image src={"https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                alt="" 
                width={800} 
                height={600}
                className="hero-bg"
                />
            <div className="page-content pb-10 lg:pb-32">
                {/* Category tag */}
                <CategoryTag>Interior Design</CategoryTag>
                {/* Title */}
                <h1 className="hero-title">Design is a plan for arranging elements in such a way as best to accomplish a particular purpose.</h1>
                {/* Arrows */}
                <div className="absolute bottom-0 right-0 hidden lg:flex">
                    <span className="arrow">
                        <ArrowBackIcon size={"full"}/>
                    </span>
                    <span className="arrow">
                        <ArrowFrontIcon size={"full"}/>
                    </span>
                </div>
                {/* Bullets */}
                <div className="flex absolute bottom-0 justify-center lg:justify-start w-full space-x-2 mb-8">
                    <span className="bullet selected"/>
                    <span className="bullet"/>
                    <span className="bullet"/>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;