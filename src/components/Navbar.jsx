function NavBar () {
  return (
      <div className= 'p-8 flex justify-between border-b-2 bg-black opacity-90 text-white'>
        <h1 className='bg-white text-xl font-bold text-blue-700 border-3 border-blue-700 p-4 rounded-lg'>AuraTech</h1>
        <ul className='flex gap-4 items-center'>
          <h3>Categorias</h3>
          <li>cat 1</li>
          <li>cat 2</li>
          <li>cat 3</li>
        </ul>
        <button className='bg-blue-700 px-3 py-1 rounded-lg'>
          <img src='https://cdn-icons-png.flaticon.com/512/1170/1170678.png' alt='Cart' className='w-5 h-5' />
        </button>
      </div>
  )
}

export default NavBar