import NavBar from "../components/Navbar"
import ItemListContainer from "../components/itemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";

function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/checkout" element={<div>Checkout</div>} />
                <Route path="/categorias/:categoryName" element={<ItemListContainer />} />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter