export default function Position() {

  return (
    <>
      <header className="fixed w-full bg-gray-800 text-white p-4 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">MyShop</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container max-w-2xl mx-auto px-4 pb-8 pt-20">
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
      </main>
    </>
  );
}