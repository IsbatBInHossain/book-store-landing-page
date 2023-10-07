const Card = () => {
  return (
    <div className='flex ml-20 items-center col-span-3 sm:col-span-2'>
      <div className=' bg-[#fef1d5] h-[500px] w-[500px] '>
        <div className='p-10'>
          <p className=' font-medium text-sm'>bookshop</p>
          <h2 className=' mt-5 font-extrabold text-6xl '>
            New Books <span className=' text-lg font-ultrabold'>for</span> Nerd
            Crooks
          </h2>
          <p className='mt-10 font-light text-lg'>
            Be one of the first one to touch and review the early publications
            of the new book before it is available elsewhere.
          </p>
          <div className='flex justify-between mt-10'>
            <button className=' bg-black text-white p-3 pr-8 pl-8 uppercase hover:bg-gray-800'>
              Browse Books
            </button>
            <button className=' bg-transparent font-bold border-4 border-black p-3 pr-8 pl-8 uppercase hover:bg-gray-800'>
              Publish Books
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
