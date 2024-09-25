import './App.css';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("");
  const [allProducts, setAllProducta] = useState([])
  const [productByCategory, setProductByCategory] = useState([])
  const [carts, setCarts] = useState([])

  const handleCategoryChange = (event) => setCategory(event.target.value)

  const getAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then((data) => setAllProducta(data))
  }
  
  const getProductByCategory = () => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => response.json())
            .then((data) => setProductByCategory(data))
  }

  const getCarts = () => {
    fetch('https://fakestoreapi.com/carts')
    .then(response => response.json())
    .then((data) => setCarts(data))
  }

  return (
    <main>

      <h1>Recuperatorio Requests con React</h1>

      <div>
        <h2>Lista de todos los productos disponibles:</h2>
        <button onClick={getAllProducts}>Mostrar</button>
        <p className="result-box">{allProducts.map((product) => product.title+ ' su precio es ' + product.price + ' dolares, ')}</p>
      </div>

      <div>
        <h2>Obtener productos de una categoría determinada</h2>
        <h3>Ingrese una categoría:</h3>
        <input type="text" value={category} onChange={handleCategoryChange} />
        <button onClick={getProductByCategory}>Enviar</button>
        
        <h3>Productos de la categoría ingresada:</h3>
        <p className="result-box">{productByCategory.map((product) => product.title + ' su precio es ' + product.price + ' dolares, ')} </p>
      </div>

      <div>
        <h2>Mensaje en caso de error:</h2>
        <p className="result-box"></p>
      </div>

      <div>
        <h2>Carritos con al menos 2 productos:</h2>
        <button onClick={getCarts}>Mostrar</button>
        <p className="result-box">{carts.map((cart) => 'El carro ' + cart.id + " tiene " + cart.products.length + ' productos ' + ', ')}</p>
      </div>
    </main>
  );
}

export default App;
