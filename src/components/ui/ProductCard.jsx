import { FaStar } from "react-icons/fa6";

import { fixedNumbers } from "../../utilities/fixedNumbers";
import { useCart } from "../../hooks/useCart";

export function ProductCard({
  id,
  badge,
  name,
  image,
  category,
  brand,
  price,
  oldPrice,
  rating,
  reviews,
  cat,
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      image,
      price,
    });
  };

  return (
    <div className="w-full border border-gray-50 bg-white rounded-xl pb-5">
      <div className="relative">
        {badge ? (
          <span
            className="absolute top-2 left-2 flex justify-center items-center bg-white text-ink w-15 h-5 rounded-full uppercase"
            style={{ fontSize: "10px" }}
          >
            {badge}
          </span>
        ) : null}

        <img
          src={image}
          alt={name}
          className="rounded-tl-xl rounded-tr-xl"
        />

        {cat ? (
          <span
            className="absolute top-2 right-2 flex justify-center items-center bg-sale text-white w-15 h-5 rounded-full uppercase"
            style={{ fontSize: "10px" }}
          >
            {fixedNumbers(price - oldPrice)}%
          </span>
        ) : null}
      </div>

      <div className="p-3.5">
        <small>
          {category} - {brand}
        </small>

        <h3>{name}</h3>

        <div className="flex items-baseline gap-1 mt-2">
          <FaStar size={10} className="text-acc" />

          <span className="text-xs">
            {rating}
          </span>

          <span className="text-xs">
            ({reviews})
          </span>
        </div>

        <div className="flex items-baseline mt-3">
          <p>${price}</p>

          <p className="text-sale line-through ms-2">
            {oldPrice != null ? oldPrice : null}
          </p>
        </div>

        <div className="mt-5">
          <button
            onClick={handleAddToCart}
            className="flex justify-center items-center border border-ink rounded-full w-full h-10 hover:bg-ink hover:text-white cursor-pointer"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}