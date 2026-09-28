import { useState } from "react";

import { Section } from "../ui/Section";
import { ProductCard } from "../ui/ProductCard";

import products from "../../data/products.json";

const INITIAL_VISIBLE = 8;
const LOAD_MORE_COUNT = 8;

const sorters = {
  all: () => 0,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
  newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
};

const filters = {
  all: () => true,
  new: (p) => p.isNew,
  featured: (p) => p.isFeatured,
  bestSellers: (p) => p.isBestSeller,
  sale: (p) => p.isOnSale,
};

const categories = ["All", ...new Set(products.map((p) => p.category))];

function SelectPill({ value, onChange, children }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none border border-ink/20 bg-white text-ink text-xs
                   rounded-full pl-4 pr-9 py-2 cursor-pointer"
      >
        {children}
      </select>

      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-3 h-3 text-ink"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 4.5l4 4 4-4" />
      </svg>
    </div>
  );
}

export function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [productFilter, setProductFilter] = useState("all");
  const [sortBy, setSortBy] = useState("all");

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleProductFilterChange = (value) => {
    setProductFilter(value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleSortByChange = (value) => {
    setSortBy(value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const visibleProducts = products
    .filter(
      (p) =>
        selectedCategory === "All" || p.category === selectedCategory
    )
    .filter(filters[productFilter])
    .sort(
      (a, b) =>
        sorters[sortBy](a, b) || a.id - b.id
    );

  const displayedProducts = visibleProducts.slice(0, visibleCount);

  const hasMore = visibleCount < visibleProducts.length;

  const showMore = () => {
    setVisibleCount((current) => current + LOAD_MORE_COUNT);
  };

  const showLess = () => {
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <Section secId="shop">
      <h2 className="font-semibold text-4xl">All Products</h2>
      <div className="flex flex-wrap gap-3 mt-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`border border-ink text-xs rounded-full px-4 py-1 cursor-pointer ${
              selectedCategory === category
                ? "bg-ink text-white"
                : "text-ink bg-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        <SelectPill
          value={productFilter}
          onChange={handleProductFilterChange}
        >
          <option value="all">All items</option>
          <option value="new">New</option>
          <option value="featured">Featured</option>
          <option value="bestSellers">Best Sellers</option>
          <option value="sale">On sale</option>
        </SelectPill>

        <SelectPill
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="all">Sort: Default</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="rating">Top rated</option>
          <option value="newest">Newest</option>
        </SelectPill>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-4">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
      {visibleProducts.length === 0 && (
        <p className="mt-6 text-sm text-ink/60">
          No products match these filters.
        </p>
      )}
      {visibleProducts.length > INITIAL_VISIBLE && (
        <div className="flex justify-center mt-8">
          {hasMore ? (
            <button
              onClick={showMore}
              className="border border-ink rounded-full px-6 py-2 text-sm
                         hover:bg-ink hover:text-white transition-colors cursor-pointer"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="border border-ink rounded-full px-6 py-2 text-sm
                         hover:bg-ink hover:text-white transition-colors cursor-pointer"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </Section>
  );
}