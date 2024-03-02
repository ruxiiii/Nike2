
import {reviews} from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className="max-container justify-center items-center">
      <div className="items-center justify-center text-center">
        <h2 className="text-4xl font-palanquin font-bold">What Our <span className="text-coral-red">Customers</span> Say?</h2>
        <div className="w-3/5 m-auto">
          <p className="font-montserrat text-slate-gray mt-5 ">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        </div>
      </div>


      <div className="flex justify-evenly px-20 mt-10 items-center max-lg:flex-col gap-14">
        {reviews.map((review)=>(
          <ReviewCard   
            key = {review.customerName}
            imgURL = {review.imgURL}
            customerName = {review.customerName}
            rating = {review.rating}
            feedback = {review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
