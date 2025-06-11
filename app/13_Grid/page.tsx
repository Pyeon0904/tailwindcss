export default function Grid() {

  return (
    <>
      <header className='bg-orange-50 p-6'>
        <nav className='flex justify-between items-center'>
          <div className='text-2xl font-bold'>MyWebsite</div>
          <ul className='flex gap-4'>
            <li>
              <a href="#" className='text-gray-700 hover:text-gray-900'>Home</a>
            </li>
            <li>
              <a href="#" className='text-gray-700 hover:text-gray-900'>About</a>
            </li>
            <li>
              <a href="#" className='text-gray-700 hover:text-gray-900'>Services</a>
            </li>
            <li>
              <a href="#" className='text-gray-700 hover:text-gray-900'>Contact</a>
            </li>
          </ul>
          <button className='px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white' type='button'>Login</button>
        </nav>
      </header>

      <div className='container h-screen max-w-2xl mx-auto p-4 bg-indigo-50'>
        <div className="grid grid-cols-4 gap-4">
          <img
            src="https://placehold.co/400x400.png?text=City"
            alt="City Image"
            className="w-full h-full rounded-lg shadow-md"
          />
          <img
            src="https://placehold.co/400x400.png?text=Landscape"
            alt="Landscape Image"
            className="w-full h-full rounded-lg shadow-md"
          />
          <img
            src="https://placehold.co/400x400.png?text=Mountain"
            alt="Mountain Image"
            className="w-full h-full rounded-lg shadow-md"
          />
          <img
            src="https://placehold.co/400x400.png?text=River"
            alt="River Image"
            className="w-full h-full rounded-lg shadow-md"
          />
          <img
            src="https://placehold.co/400x400.png?text=Forest"
            alt="Forest Image"
            className="w-full h-full rounded-lg shadow-md"
          />
          <img
            src="https://placehold.co/400x400.png?text=Ocean"
            alt="Ocean Image"
            className="w-full h-full rounded-lg shadow-md"
          />
          <img
            src="https://placehold.co/400x400.png?text=Desert"
            alt="Desert Image"
            className="w-full h-full rounded-lg shadow-md"
          />
          <img
            src="https://placehold.co/400x400.png?text=Waterfall"
            alt="Waterfall Image"
            className="w-full h-full rounded-lg shadow-md"
          />
          <img
            src="https://placehold.co/400x400.png?text=Beach"
            alt="Beach Image"
            className="w-full h-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
}