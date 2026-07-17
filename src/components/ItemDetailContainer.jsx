import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";  
import { getProductDetail } from "../firebase/db";

function ItemDetailContainer() {
    const [item, setItem] = useState();
    const { id } = useParams();

    useEffect(() => {

        getProductDetail(id, setItem)
    }, [id]);
    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer