// src/app/your-cart/page.tsx
import ProductSuggestion from '@/components/ProductSuggestion';
import CartItemRow from '@/components/CartItem';
import OrderSummary from '@/components/OrderSummary';
import { cartItems, suggestions } from '@/app/your-cart/data/sample-data';

export default function YourCartPage() {
  return (
    <div className="container mx-auto px-4 py-8">z
      <div className="grid md:grid-cols-3 gap-8">
        {/* ========= LEFT: Suggestion + Cart ========= */}
        <div className="md:col-span-2 flex flex-col gap-12">
          {/* --- Suggestion Section --- */}
          <section>
            <h2 className="text-2xl font-bold mb-4">BẠN CÓ CẦN THÊM?</h2>
            <div className="relative">
              {/* Left arrow */}
              <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white border border-gray-300 rounded-full shadow">
                &#8249;
              </button>
              <div className="flex overflow-x-auto gap-6 px-12">
                {suggestions.map(item => (
                  <ProductSuggestion key={item.id} item={item} />
                ))}
              </div>
              {/* Right arrow */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white border border-gray-300 rounded-full shadow">
                &#8250;
              </button>
            </div>
            <hr className="mt-6 border-black" />
          </section>

          {/* --- Cart Section --- */}
          <section className="space-y-4">
            <h1 className="text-2xl font-bold bg-gray-100 px-4 py-2">
              GIỎ HÀNG
            </h1>
            {cartItems.map(item => (
              <CartItemRow key={item.id} item={item} />
            ))}

            {/* Footer buttons */}
            <div className="flex justify-between mt-6">
              <button className="bg-gray-800 text-white px-6 py-3 font-semibold rounded">
                XÓA HẾT
              </button>
              <button className="bg-gray-800 text-white px-6 py-3 font-semibold rounded">
                QUAY LẠI MUA HÀNG
              </button>
            </div>
          </section>
        </div>

        {/* ========= RIGHT: Order Summary ========= */}
        <div className="sticky top-28">
          <OrderSummary cart={cartItems} />
        </div>
      </div>
    </div>
  );
}
