export default function Spacing() {

  return (
    <>
      <div className='space-y-3'>
        <div className='w-32 h-32 bg-blue-600'></div>
        <div className='w-32 h-32 bg-blue-700'></div>
        <div className='w-32 h-32 bg-blue-800'></div>
      </div>
      <div className='flex space-x-3 mt-4'>
        <div className='w-32 h-32 bg-blue-600'></div>
        <div className='w-32 h-32 bg-blue-700'></div>
        <div className='w-32 h-32 bg-blue-800'></div>
      </div>
    </>
  );
}