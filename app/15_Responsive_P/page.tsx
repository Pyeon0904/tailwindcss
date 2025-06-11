export default function Responsive_Practice() {

  return (
    <>
      <div
        className="max-w-md mx-auto p-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
      >
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://placehold.co/400x400.png?text=City"
              alt="Modern building"
            />
          </div>
          <div className="p-8">
            <div
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just that.
            </p>
          </div>
        </div>
      </div>

      {/* md이상 : max-w-2xl / 그보다 작을 때 : max-w-md */}
      <div
        className="mx-auto p-10 bg-white rounded-xl shadow-md overflow-hidden max-w-md md:max-w-2xl mt-10"
      >
        {/* md 사이즈 이상일 때 : flex(가로) / 더 작은 때는 : 세로*/}
        <div className="md:flex">
          {/* 이미지 */}
          <div className="shrink-0">
            <img
              className="object-cover h-48 w-full md:h-full w-48"
              src="https://placehold.co/400x400.png?text=City"
              alt="Modern building"
            />
          </div>
          {/* 텍스트 */}
          <div className="p-8">
            <div
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
            >
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}