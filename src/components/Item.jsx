import { useNavigate } from 'react-router-dom';

function Item ({ item }) {
    const navigate = useNavigate();
    return (
        <div  className='bg-black opacity-90 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1 gap-4 p-4 border rounded-lg text-white'>
            <img className= 'bg-white border rounded-lg' src={item.image} alt={item.name} />
            <h2 className='text-xl font-bold'>{item.name}</h2>
            <p>Precio:  ${item.price}</p>
            <button className='bg-white text-black px-4 py-2 rounded' onClick={() => navigate(`/product/${item.id}`)}>
                Ver mas...
            </button>
        </div>
    )
}

export default Item