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
          We Provide You{" "}
          <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Quality</span> Solar Products
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
        Delivering premium energy solutions, our meticulously crafted solar products are designed to enhance your lifestyle, offering you unmatched quality, innovation, and a commitment to sustainable living.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Our commitment to detail and excellence guarantees your satisfaction.
        </p>

        <div className="mt-11">
          <Button label="View details" />
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