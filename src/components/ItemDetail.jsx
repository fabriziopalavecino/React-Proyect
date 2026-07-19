import Counter from "./ItemCount";

function ItemDetail({ item }) {
    return (
        <div className="bg-black opacity-90 grid grid-cols-4 md:grid-cols-2 lg:grid-cols-1 gap-4 p-4 border rounded-lg m-8 text-white">
            <p className="text-xl font-bold">{item?.name}</p>
            <img className="bg-white border rounded-lg" src={item?.image} alt={item?.name} />
            <p className="text-lg">{item?.description}</p>
            <p className="text-2xl font-bold">${item?.price}</p>

            <Counter item={item} />
        </div>
    )
}

export default ItemDetail