import { arrowRight } from "../assets/icons";
import { useState } from "react";

import { hero } from "../assets/images";
import Button from "../Components/Button";
import { shoes, statistics } from "../constants";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(hero);

  return (
    <section
      id="home"
      className="hero-section w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container"
    >
      {/* Text Content */}
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-4'>
        <p className="text-xl font-montserrat text-coral-red">Power Your Future with</p>
        <h1 className="mt-5 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative pr-10">Reliable</span> <br />
          <span className="text-coral-red">Solar Solution</span> 
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Exulted Eagles is your trusted partner for solar energy solutions,
          offering expert sales, seamless installations, and dependable
          maintenance. Say goodbye to power outages and hello to clean,
          sustainable energy for your home and business.
        </p>
        <a href="https://wa.me/2348082921633" target="_blank" rel="noopener noreferrer">
          <Button label="Shop now" iconURL={arrowRight} />
        </a>
        

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Content */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center w-full">
        <img 
          src={bigShoeImg} 
          alt="Solar Battery" 
          width={610}
          height={502}
          className="relative object-contain z-10" 
        />

        <div className="flex sm:gap-6 gap-4 absolute max-sm:-bottom-[5%] sm:-bottom-[12%] sm:left-[12%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image} 
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}  // Updated to changeheroImg
                bigShoeImg={bigShoeImg} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
