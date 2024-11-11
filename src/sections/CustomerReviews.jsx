import { reviews } from "../constants"
import ReviewCard from "../Components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section>
      <h3 className="font-bold text-4xl text-center font-palanquin">
        What Our {''}
        <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="infor-text m-auto mt-4 max-w-lg text-center">Discover authentic stories from our happy customers sharing their outstanding experiences with our solar products.</p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback} />
          ))}
      </div>
    </section>
  )
}

export default CustomerReviews