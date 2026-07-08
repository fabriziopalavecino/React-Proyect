import { useNavigate } from 'react-router-dom';

function Item ({ item }) {
    const navigate = useNavigate();
    return (
        <div  className='grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1 gap-4 p-4 border rounded-lg'>
            <img src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.stock}</p>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button className='bg-black text-white px-4 py-2 rounded' onClick={() => navigate(`/product/${item.id}`)}>
                Ver mas...
            </button>
            <button className='bg-blue-700 text-white px-4 py-2 rounded width-min'>Agregar al carrito</button>
        </div>
    )
}

export default Item