import Button from "../components/Button"


const Subscribe = () => {
  return (
    <section className="max-container flex md:justify-evenly flex-col md:flex-row gap-10"
    id = 'contact-us'>
      <div className="align-left w-3/5">
        <h3 className="font-palanquin text-3xl font-bold">Sign Up for 
          <span className="text-coral-red"> Updates  </span>
           & Newsletter
        </h3>
      </div>


      <div className="rounded-full w-full border-slate-gray flex justify-content items-center lg:max-w-[40%] gap-5 p-2.5 max-sm:flex-col md:items-left border-2">
        <input type = 'text' placeholder = "ruxi1811@gmail.com"className="input"/>
        <div className="flex max-sm:flex-col">
          <Button label = 'Sign Up' fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe
