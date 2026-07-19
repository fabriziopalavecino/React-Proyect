import ItemListContainer from './itemListContainer'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import menuIcon from "../assets/botonCategorias.webp"
import { getCategories } from "../firebase/db";
import CartWidget from './CartWidget';


function NavBar() {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);
  
  return (
    <div className="relative p-8 flex justify-between items-center border-b-2 bg-black opacity-90 text-white z-50">

      <Link
        to="/"
        className="btn btn-ghost bg-white text-xl font-bold text-blue-700 border-3 border-blue-700 p-4 rounded-lg"
      >
        AuraTech
      </Link>

      <div className="flex items-center gap-5 rounded-lg bg-gray-800 p-2"
        onMouseEnter={() => setMostrarCategorias(true)}
        onMouseLeave={() => setMostrarCategorias(false)}>

        <button className="bg-gray-800 p-2 rounded-lg">
          <img
            src={menuIcon}
            alt="Menú"
            className="w-8 h-8 rounded" />
        </button>


        {mostrarCategorias && (
          <ul className="absolute top-20 right-20 bg-gray-800 rounded-lg p-4 flex flex-col gap-2">
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={`/categorias/${category.name}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
        
        {/* Carrito */}
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;