import { useEffect, useState } from 'react'

function FetchProducts ({ children, products }) {
    const [items, setItems] = useState([])

    useEffect (() => {
        const getProducts = () => new Promise((res, rej) => {
        if (products.length > 0) {
            setTimeout(() => {
            res(products)
            }, 1000)
        } else {
            rej(new Error("No se encontraron productos"));
        }
        })

        getProducts()
        .then(res => setItems(res))
        .catch(err => console.log(err))

    }, [])

    return (
        <>
            {children(items)}
        </>
    )
}

export default FetchProducts