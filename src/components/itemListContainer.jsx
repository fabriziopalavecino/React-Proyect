import ItemList from './itemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCollection, getProductsByCategory } from '../firebase/db'


function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();


  useEffect(() => {
    if (categoryName) {
      getProductsByCategory(categoryName)
        .then((res) => setItems(res));
    } else {
      getCollection("products")
        .then((res) => setItems(res));
    }
  }, [categoryName]);


  if (items.length === 0) {
    return (
      <div className="flex flex-col p-4 gap-4">
        <div className="skeleton h-150 w-full"></div>
        <div className="skeleton h-150 w-full"></div>
        <div className="skeleton h-150 w-full"></div>
        <div className="skeleton h-150 w-full"></div>
      </div>
    )
  }



  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer