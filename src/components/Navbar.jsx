import ItemListContainer from './itemListContainer'
import { Link } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../assets/botonCategorias.webp"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.js";


function NavBar() {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { getProductsQuantity } = useContext(CartContext);

  return (
    <div className="relative p-8 flex justify-between items-center border-b-2 bg-black opacity-90 text-white z-50">

      <Link
        to="/"
        className="btn btn-ghost bg-white text-xl font-bold text-blue-700 border-3 border-blue-700 p-4 rounded-lg"
      >
        AuraTech
      </Link>

      <div className="flex items-center gap-5 rounded-lg bg-gray-800 p-2">

        <button className="bg-gray-800 p-2 rounded-lg">
          <img
            src={menuIcon}
            alt="Menú"
            className="w-8 h-8 rounded"
            onMouseEnter={() => setMostrarCategorias(true)}
            onMouseLeave={() => setMostrarCategorias(false)}
          />
        </button>


        {mostrarCategorias && (
          <ul className="absolute top-20 right-20 bg-gray-800 rounded-lg p-4 flex flex-col gap-2">
            <li>
              <Link to="/categorias/smartphones">Smartphones</Link>
            </li>

            <li>
              <Link to="/categorias/beauty">Belleza</Link>
            </li>

            <li>
              <Link to="/categorias/furniture">Muebles</Link>
            </li>


            <li>
              <Link to="/categorias/fragrances">Fragancias</Link>
            </li>

            <li>
              <Link to="/categorias/laptops">Laptops</Link>
            </li>
          </ul>
        )}

        {/* Carrito */}
        <button
          className="relative bg-blue-700 px-3 py-1 rounded-lg"
          onClick={() => navigate("/cart")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
            alt="Cart"
            className="w-5 h-5"
          />

          {getProductsQuantity() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {getProductsQuantity()}
            </span>
          )}

        </button>
      </div>
    </div>
  );
}

export default NavBar;