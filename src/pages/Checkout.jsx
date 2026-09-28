import { Section } from "../components/ui/Section";
import { useCart } from "../hooks/useCart";

export function Checkout() {
  const {
    items,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const shipping = cartTotal >= 100 ? 0 : 10;
  const total = cartTotal + shipping;

  if (items.length === 0) {
    return (
      <Section>
        <div className="min-h-[60vh] flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl font-semibold">
            Your cart is empty
          </h1>

          <p className="text-sm text-ink/60 mt-2">
            Add some products before checking out.
          </p>

          <a
            href="/#shop"
            className="mt-6 border border-ink rounded-full px-6 py-2 text-sm
                       hover:bg-ink hover:text-white transition-colors"
          >
            Continue Shopping
          </a>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="max-w-6xl mx-auto py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold">
            Checkout
          </h1>

          <p className="text-sm text-ink/60 mt-2">
            Complete your order details below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Contact */}
            <div>
              <h2 className="text-xl font-semibold mb-5">
                Contact information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink"
                />

                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink"
                />

                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink md:col-span-2"
                />

                <input
                  type="tel"
                  placeholder="Phone number"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink md:col-span-2"
                />
              </div>
            </div>

            {/* Shipping */}
            <div>
              <h2 className="text-xl font-semibold mb-5">
                Shipping address
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink md:col-span-2"
                />

                <input
                  type="text"
                  placeholder="City"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink"
                />

                <input
                  type="text"
                  placeholder="Postal code"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink"
                />

                <input
                  type="text"
                  placeholder="Country"
                  className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                             focus:border-ink md:col-span-2"
                />
              </div>
            </div>

            {/* Delivery */}
            <div>
              <h2 className="text-xl font-semibold mb-5">
                Delivery method
              </h2>

              <label className="flex items-center justify-between border border-ink rounded-xl p-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="delivery"
                    defaultChecked
                  />

                  <div>
                    <p className="text-sm font-medium">
                      Standard delivery
                    </p>

                    <p className="text-xs text-ink/60 mt-1">
                      3–5 business days
                    </p>
                  </div>
                </div>

                <span className="text-sm font-medium">
                  {shipping === 0 ? "Free" : `$${shipping}`}
                </span>
              </label>
            </div>

            {/* Payment */}
            <div>
              <h2 className="text-xl font-semibold mb-5">
                Payment
              </h2>

              <div className="border border-ink/20 rounded-xl p-5">
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                               focus:border-ink"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                                 focus:border-ink"
                    />

                    <input
                      type="text"
                      placeholder="CVC"
                      className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                                 focus:border-ink"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Name on card"
                    className="border border-ink/20 rounded-lg px-4 py-3 text-sm outline-none
                               focus:border-ink"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div>
            <div className="border border-ink/10 rounded-2xl p-6 sticky top-6">
              <h2 className="text-xl font-semibold">
                Your order
              </h2>

              <div className="mt-6 space-y-5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-3">
                        <h3 className="text-sm font-medium truncate">
                          {item.name}
                        </h3>

                        <p className="text-sm font-medium whitespace-nowrap">
                          ${item.price * item.quantity}
                        </p>
                      </div>

                      <p className="text-xs text-ink/60 mt-1">
                        ${item.price} each
                      </p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-ink/20 rounded-full">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="w-7 h-7 text-sm cursor-pointer"
                          >
                            −
                          </button>

                          <span className="text-xs w-6 text-center">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="w-7 h-7 text-sm cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-sale hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-ink/10 mt-6 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-ink/60">
                    Subtotal
                  </span>

                  <span>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-ink/60">
                    Shipping
                  </span>

                  <span>
                    {shipping === 0
                      ? "Free"
                      : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-semibold pt-3">
                  <span>Total</span>

                  <span>
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                className="w-full mt-6 h-12 bg-ink text-white rounded-full
                           hover:opacity-90 transition-opacity cursor-pointer"
              >
                Place Order
              </button>

              <p className="text-[11px] text-ink/50 text-center mt-4">
                By placing your order, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}