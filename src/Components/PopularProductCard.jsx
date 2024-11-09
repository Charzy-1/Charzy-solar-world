const PopularProductCard = ({ imgURL, name, description }) => {
    return (
      <div className="flex flex-col items-start text-left">
        <img src={imgURL} alt={name} className="w-64 h-64 object-cover mb-4" />
        <h3 className="text-xl font-bold text-coral-red">{name}</h3>
        <p className="mt-2 text-slate-gray max-w-xs">{description}</p>
      </div>
    );
  };
  
  export default PopularProductCard;
  