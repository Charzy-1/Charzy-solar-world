import { arrowRight } from "../assets/icons"; // Import the arrow icon

const PopularProductCard = ({ imgURL, name, description }) => {
  return (
    <div className="flex flex-col items-start text-left">
      <img src={imgURL} alt={name} className="w-64 h-64 object-cover mb-4" />
      <h3 className="text-xl font-bold text-coral-red">{name}</h3>
      <p className="mt-2 mb-4 text-slate-gray max-w-xs">{description}</p>
      
      {/* Customized Button with ArrowRight Icon */}
      <a href="/">
        <button className="bg-coral-red text-white font-semibold py-2 px-4 flex items-center rounded-none">
          Shop Now
          <img src={arrowRight} alt="Arrow Right" className="ml-2" /> {/* Positioning the icon to the right of the text */}
        </button>
      </a>
    </div>
  );
};

export default PopularProductCard;
