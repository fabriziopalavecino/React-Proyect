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



  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer