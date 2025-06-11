export default function Responsive() {

  return (
    <>
      {/* 작은화면 : blue / 중간화면 : red / 큰화면 : 녹색 */}
      {/*<main className='min-h-screen bg-blue-100 md:bg-red-100 lg:bg-green-100'></main>*/}

      {/* sm : blue / md ~ xl : red / 2xl : green */}
      <main className='min-h-screen bg-blue-100 md:max-2xl:bg-red-100 2xl:bg-green-50'></main>
    </>
  );
}