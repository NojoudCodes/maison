import { Section } from "../ui/Section";
import products from "../../data/products.json"
import { ProductCard } from "../ui/ProductCard";

export function BestSellerProducts() {
  return (
    <Section secId="sellers">
      <h2 className="font-semibold text-4xl">Best Sellers</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-baseline gap-5 mt-5">
        {products
          .filter((product) => product.isBestSeller)
          .slice(0, 4)
          .map(product =>(
            <ProductCard key={product.id} badge="" {...product} />
          ))
        }
      </div>
    </Section>
  )
}
