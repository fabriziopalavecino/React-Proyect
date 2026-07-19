import NavBar from "../components/Navbar"
import ItemListContainer from "../components/itemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";
import CartContainer from "../components/CartContainer";
import Checkout from "../components/Checkout";
import { Toaster } from "react-hot-toast";

function AppRouter() {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/categorias/:categoryName" element={<ItemListContainer />} />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
            </Routes>
            <Toaster />
        </BrowserRouter>
    )
}

export default AppRouter