export default function Transition() {

  return (
    <>
      {/* Transition 미적용 */}
      <div className="min-h-screen flex flex-col gap-y-4 items-center justify-center">
        <button
          className="text-5xl bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        >
          Hover me
        </button>
        {/* Transition 적용 */}
        <button
          className="text-5xl bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-500"
        >
          Hover me
        </button>
      </div>
    </>
  );
}