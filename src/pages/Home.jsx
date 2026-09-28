import { AllProducts } from "../components/sections/AllProudcts";
import { BestSellerProducts } from "../components/sections/BestSellerProducts";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";
import { NewProducts } from "../components/sections/NewProducts";
import { OnSaleProducts } from "../components/sections/OnSaleProducts";
import { Section } from "../components/ui/Section";


export function Home() {
  return(
    <>
      <Section>
        <div className="flex flex-col justify-center items-center h-96 my-9">
          <h1 className="font-bold text-4xl lg:text-8xl">Everyday essentials, <br /> thoughtfully chosen.</h1>
          <p className="text-lg mt-3 text-mut text-center">Simple, well-made products for home, wardrobe and life.</p>
          <a href="#shop" className="flex justify-center items-center text-white text-xs bg-ink w-20 h-8 rounded-full mt-5">Shop</a>
        </div>
      </Section>
      <Section>
        <NewProducts />
        <FeaturedProducts />
        <BestSellerProducts />
        <OnSaleProducts />
        <AllProducts />
      </Section>
      <footer className="border-t border-t-ink/20 text-center py-6 mt-5">
        <p className="text-sm">© 2026 Maison. Demo store.</p>
      </footer>
    </>
  )
}