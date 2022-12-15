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
      // if it isn't added to the cart add it to the cart
      setCart((cart) => [...cart, product]);
    }
  };

  const removeItem = (id) => {
    // first reset quantity back to 1; (for some reason it saves the quantity value, even though its being removed)
    let newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity = 1;
        return item;
      } else {
        return item;
      }
    });
    // then remove item from the cart
    newCart = newCart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const updateCartQty = (product, add) => {
    // if the quantity is less than one, and they want to subtract more, alert them
    if (product.quantity < 1 && !add) {
      alert("you cannot go into negative numbers, unless you want me to pay you");
    } else {
      // make the new cart with the updated quantity
      const newCart = cart.map((item) => {
        if (product.id === item.id && add) {
          // if add, add to quantity
          item.quantity += 1;
          return item;
        } else if (product.id === item.id && !add) {
          // if not add, minus from quantity
          item.quantity -= 1;
          return item;
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  return (
    <div className="App">
      <header data-testid="app-div" className="App-header">
        <h1>Our products</h1>
        {/* products */}
        <div id="products__container">
          {products.map((product) => (
            <Product name={product.name} price={product.price} img={product.img} id={product.id} handleAddToCart={handleAddToCart} />
          ))}
        </div>
        {/* shopping cart */}
        <div>
          <h1>Cart</h1>
          <ShoppingTable cart={cart} updateCartQty={updateCartQty} removeItem={removeItem} />
        </div>
      </header>
    </div>
  );
}

export default App;
