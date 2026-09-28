import { Link } from "react-router";
import { LuShoppingCart } from "react-icons/lu";

import { IconBadge } from "../ui/IconBadge";
import { useCart } from "../../hooks/useCart";

const NAV_LINKS = [
  { label: "New", url: "/#new" },
  { label: "Featured", url: "/#featured" },
  { label: "Best Sellers", url: "/#sellers" },
  { label: "Sale", url: "/#sales" },
  { label: "Shop", url: "/#shop" },
];

export function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="fixed left-0 right-0 z-10 flex justify-between items-center bg-bg shadow-md px-15 py-5">
      <div className="flex items-baseline gap-8">
        <Link
          to="/"
          className="font-semibold text-xl logo"
        >
          Maison
        </Link>

        <div className="flex gap-5">
          {NAV_LINKS.map((link) => (
            <a
              href={link.url}
              key={link.url}
              className="text-sm text-mut hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex gap-5">
        <Link
          to="/checkout"
          className="relative inline-flex cursor-pointer"
        >
          <IconBadge
            icon={<LuShoppingCart size={15} />}
          />

          {cartCount > 0 && (
            <span
              className="absolute -top-2 -right-2 flex items-center justify-center
                        w-4 h-4 rounded-full bg-ink text-white text-[10px]"
            >
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}