function Item ({ item }) {
    return (
        <div  className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1 gap-4 p-4 border rounded-lg'>
            <img src='https://www.loading.es/blog/wp-content/uploads/ejemplo-jpg.jpg' alt='Item' />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button className='bg-black text-white px-4 py-2 rounded'>Ver mas...</button>
            <button className='bg-blue-700 text-white px-4 py-2 rounded width-min'>Agregar al carrito</button>
        </div>
    )
}

export default Item