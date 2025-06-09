export default function Typography() {

  return (
    <>
      <h2 className='text-2xl'>폰트 크기 조절</h2>
      <p className='text-xs'>Lorem ipsum dolor sit amet.</p>
      <p className='test-sm'>Lorem ipsum dolor sit amet.</p>
      <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
      <p className='text-[50px]'>Lorem ipsum dolor sit amet.</p>
      {/* custom : config를 통해서 할 수도 있고, text-[커스텀] 대괄호 사이에 커스텀값 입력으로도 가능 */}

      <h2 className='text-2xl'>폰트 두께 조절</h2>
      <p className='font-light'>Lorem ipsum dolor sit amet.</p>
      <p className='font-bold'>Lorem ipsum dolor sit amet.</p>
      <p className='font-black'>Lorem ipsum dolor sit amet.</p>

      <h2 className='text-2xl'>줄 간격</h2>
      <p className='leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis est
        fugit illo inventore nulla praesentium voluptatem! Alias, debitis dolore enim, esse fugiat laboriosam maxime
        minus nihil praesentium reiciendis unde!</p>
      <p className='leading-loose'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis est fugit
        illo inventore nulla praesentium voluptatem! Alias, debitis dolore enim, esse fugiat laboriosam maxime minus
        nihil praesentium reiciendis unde!</p>
      <p className='leading-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus debitis est fugit
        illo inventore nulla praesentium voluptatem! Alias, debitis dolore enim, esse fugiat laboriosam maxime minus
        nihil praesentium reiciendis unde!</p>

      <h2 className='text-2xl'>폰트 컬러 조절</h2>
      <p className='text-indigo-800'>Lorem ipsum dolor sit amet.</p>
      <p className='text-sky-900'>Lorem ipsum dolor sit amet.</p>
      <p className='text-red-900'>Lorem ipsum dolor sit amet.</p>
      <p className='text-red-900/100'>Lorem ipsum dolor sit amet.</p>
      {/* 900/100 : 뒤에 '/' 로 표현해주는 것은 opacity (투명도) 의미!*/}

      <h2 className='text-2xl'>hover 추가</h2>
      <p className='text-indigo-800 hover:text-indigo-200'>Lorem ipsum dolor sit amet.</p>
    </>
  );
}