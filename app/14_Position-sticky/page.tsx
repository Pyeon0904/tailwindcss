export default function Sticky() {

  return (
    <>
      <header className="fixed left-0 right-0 bg-gray-800 text-white p-4 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyShop</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container max-w-5xl mx-auto px-4 pb-8 pt-24 flex gap-x-4">
        <section className="w-3/5">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://placehold.co/400x400.png?text=City"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Landscape"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Mountain"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=River"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Ocean"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Desert"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=City"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Waterfall"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
            <img
              src="https://placehold.co/400x400.png?text=Beach"
              alt="City Image"
              className="w-full h-full rounded-lg shadow-md"
            />
          </div>
        </section>
        <aside className="w-2/5">
          <div className="sticky top-[64px] p-6 border-2 border-gray-800 rounded-lg">
            <h2 className="text-xl font-bold mb-4">장바구니</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>상품 1</span>
                <span>₩ 10,000</span>
              </div>
              <div className="flex justify-between">
                <span>상품 2</span>
                <span>₩ 20,000</span>
              </div>
              <div className="flex justify-between font-bold border-t pt-2">
                <span>총합계</span>
                <span>₩ 30,000</span>
              </div>
            </div>
            <button
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              type="button"
            >
              결제하기
            </button>
          </div>
        </aside>
      </main>
    </>
  );
}