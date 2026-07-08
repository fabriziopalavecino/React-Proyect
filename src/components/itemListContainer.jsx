import ItemList from './itemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  
  useEffect(() => {
    const url_base = 'https://dummyjson.com/products';
    const url_categorias = `${url_base}/category/${categoryName}`;

    fetch(categoryName ? url_categorias : url_base)
      .then(res => res.json())
      .then(data => setItems(data.products))
  }, [categoryName]);

  

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer