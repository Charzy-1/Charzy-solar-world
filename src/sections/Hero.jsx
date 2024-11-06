import { arrowRight } from "../assets/icons";
import { hero } from "../assets/images";
import Button from "../Components/Button";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container"
    >
      {/* Text Content */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-[3rem] xl:px-[3.5rem] pt-28">
        <p className="text-xl font-montserrat text-coral-red">Power Your Future with</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="relative z-10 pr-10">Reliable</span> <br />
          <span className="text-coral-red">Solar Solution</span> 
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Exulted Eagles is your trusted partner for solar energy solutions,
          offering expert sales, seamless installations, and dependable
          maintenance. Say goodbye to power outages and hello to clean,
          sustainable energy for your home and business.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

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
      <div className="relative flex-1 flex justify-center items-center xl:m-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
          src={hero} 
          alt="Solar Battery" 
          width={610}
          height={500}
          className="relative object-contain z-10" 
        />
      </div>
    </section>
  );
};

export default Hero;
