import { products } from "../constants"
import PopularProductCard from "../Components/PopularProductCard"
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm-mt-12">
      <div className="flex flex-col justify-center gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience exceptional quality and innovation with our premium solar solutions...
        </p>
   
      </div>

      <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
