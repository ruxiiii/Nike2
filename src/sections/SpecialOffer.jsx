// import React from 'react'

import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="max-container justify-wrap flex max-xl:flex-col-reverse justify-center gap-10">
      <div className="flex-1 items-center justify-center">
        <img src={offer} width={773} height = {687} className="object-contain w-full"/>
      </div>
      <div className="px-10 py-10 items-center justify-center xl:text-left xl:w-2/5">
        <h2 className="text-4xl font-palanquin font-bold "><span className="text-coral-red ">Special</span> Offer</h2>
        <p className="mt-10 mb-5 font-montserrat text-slate-gray">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="font-montserrat text-slate-gray">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex gap-5 mt-5">
        <Button label='Shop now'/>
        <Button label = 'Learn More'
        backgroundColor = 'bg-white' border-color='bprder-slate-gray' textColor = 'text-slate-gray'/>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer
