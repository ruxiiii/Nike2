import { shoe8 } from "../assets/images"
import Button from "../components/Button"



const SuperQuality = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-between gap-10 max-container  ">
      <div className=" xl:w-2/5 flex flex-col items-start">
        <h2 className="text-4xl font-palanquin font-bold max-w-lg ">We Provide You <span className="text-coral-red ">Super Quality</span> Shoes</h2>
        <p className="mt-10 font-montserrat text-lg text-slate-gray leading-8 ">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="font-montserrat mt-8  lg:max-w-lg mb-10 text-lg text-slate-gray">Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label='View Details'/>
      </div>

      <div className="relative flex-1 flex justify-center items-center ">
        <img src = {shoe8}  width={570}
        height={522} alt='Shoe Image' className="object-contain"/>
      </div>      

    </section>
  )
}

export default SuperQuality
