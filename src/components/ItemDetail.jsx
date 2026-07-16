import Counter from "./Counter";

function ItemDetail({ item }) {
    return (
        <div className="bg-black opacity-90 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1 gap-4 p-4 border rounded-lg m-8 text-white">
            <p className="text-xl font-bold">{item?.title}</p>
            <img className="bg-white border rounded-lg" src={item?.thumbnail} alt={item?.title} />
            <p className="text-lg">{item?.description}</p>
            <p className="text-2xl font-bold">${item?.price.toFixed(2)}</p>
            <p className="text-lg">Stock: {item?.stock}</p>
            <p className="text-lg">Rating: {item?.rating}</p>

            <Counter item={item} />
        </div>
    )
}

export default ItemDetail