import {Hero, CustomerReviews, Footer, PopularProducts, Services,SpecialOffer,SuperQuality,Subscribe} from './sections';
import NavBar from './components/NavBar';


export const App = () => {
  return (
    <main className="relative">
      <NavBar/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding"><SuperQuality/></section>
      <section className="py-10"><Services/></section>
      <section className="padding"><SpecialOffer/> </section>
      <section className="bg-pale-blue padding"><CustomerReviews/></section>
      <section className="padding-x sm:py-32 py-16 w-full"><Subscribe/></section>
      <section className="bg-black padding-x padding-t pb-12"><Footer/></section>
    </main>
  )
}

export default App;