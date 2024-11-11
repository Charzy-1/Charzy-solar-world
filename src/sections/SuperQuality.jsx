import Button from "../Components/Button"
import { superHunkar } from "../assets/images"

const SuperQuality = () => 
  {
  return (
    <section
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-containt"
    >
      {/* lefthand text and button container */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          About <span className="text-coral-red">Exulted Eagles</span> Nigeria Limited
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
        Exulted Eagles Nigeria limited is the leading backup systems and renewable energy company rightly located in Nigeria with our offices at t, Abuja, Asaba, Bayelsa, Benin, Calabar, Lagos, Port Harcour, Warri ,  etc as well as distribution presence all over the country.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Our commitment to detail and excellence guarantees your satisfaction.
        </p>

        <div className="mt-11">
        <a href="https://wa.me/2348082921633" target="_blank" rel="noopener noreferrer">
             <Button label="Get Quote" />
          </a> 
        </div>
      </div>

      {/* image wrapper/container */}
      <div className="flex-1 flex justify-center items-center">
        <img src={superHunkar} alt="Hundar battery"
        width={570}
        height={522}
        className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality