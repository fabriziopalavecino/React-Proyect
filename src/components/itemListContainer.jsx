import { useState, useEffect } from 'react'
import ItemList from './itemList'

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 19.99,
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 29.99,
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 39.99,
  },
]; // Simulación de productos


function ItemListContainer () {
  const [items, setItems] = useState([])

  useEffect (() => {
    const getProducts = () => new Promise((res, rej) => {
      if (products.length > 0) {
        setTimeout(() => {
          res(products)
        }, 1000)
      } else {
        rej({Error: 'No se encontraron productos'})
      }
    })

    getProducts()
      .then(res => setItems(res))
      .catch(err => console.log(err))

  }, [])

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer