import "./App.css";
import { useId, useState } from "react";

//pictures
import EarbudsPic from "./assets/earbuds.jpg";
import LaptopPic from "./assets/laptop.jpg";
import ImacPic from "./assets/imac.jpg";

// components
import Product from "./components/Product";
import ShoppingTable from "./components/ShoppingTable";

function App() {
  // hardcoded products
  const hardCodedProducts = [
    { id: useId(), name: "Generic Earphone 2000", quantity: 1, price: 200, img: EarbudsPic },
    {
      id: useId(),
      name: "Robo Laptop 3000",
      quantity: 1,
      price: 800,
      img: LaptopPic,
    },
    {
      id: useId(),
      name: "Generic Imac Computer",
      quantity: 1,
      price: 900,
      img: ImacPic,
    },
  ];

  const [products, setProducts] = useState(hardCodedProducts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    // find object based on the id
    const product = products.find((product) => product.id === id);

    // if it already includes the product
    if (cart.includes(product)) {
      // update the quantity in the array
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          item.quantity += 1;
          return item;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // if it doesn't add it to the cart
      setCart((cart) => [...cart, product]);
    }
  };

  const removeItem = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart)
  }

  const updateCartQty = (product, add) => {
    // if the quantity is less than one, and they want to subtract more
    if (product.quantity < 1 && !add) {
      alert("you cannot go into negative numbers, unless you want me to pay you");
    } else {
      // make the new cart with the updated quantity
      const newCart = cart.map((item) => {
        if (product.id == item.id && add) {
          item.quantity += 1;
          return item;
        } else if (product.id == item.id && !add) {
          item.quantity -= 1;
          return item;
        }
        {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  return (
    <div className="App">
      <header data-testid="app-div" className="App-header">
        {/* react logo */}
        <h1>Our products</h1>

        {/* products */}
        <div id="products__container">
          {products.map((product) => (
            <Product name={product.name} price={product.price} img={product.img} id={product.id} onClick={handleAddToCart} />
          ))}
        </div>

        {/* shopping cart */ }
        <div>
          <h1>Cart</h1>
          <ShoppingTable cart={cart} updateCartQty={updateCartQty} removeItem={removeItem}/>
        </div>
      </header>
    </div>
  );
}

export default App;