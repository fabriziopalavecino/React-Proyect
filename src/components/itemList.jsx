import Item from './Item'

function ItemList( { items }) {
    return (
        <div className='p-4 grid gap-4'>
            {items.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
}

export default ItemList