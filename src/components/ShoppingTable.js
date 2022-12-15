import { useEffect, useState } from "react";
import styles from "./ShoppingTable.module.css";

const ShoppingTable = ({ cart, updateCartQty, removeItem }) => {
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // this effect executes every time a the cart changes
  useEffect(() => {
    let totalPrice = 0;
    let totalQty = 0;
    // for each item calculate the price with quantity and add it to total price
    for (let item of cart) {
      totalPrice += item.price * item.quantity;
      totalQty += item.quantity;
    }
    // set the total price
    setTotal(totalPrice);
    setTotalQuantity(totalQty);
  }, [cart]);


  return (
    // from w3schools
    <table>
      <tr>
        <th>Item Name</th>
        <th>Price</th>
        <th>Qty</th>
        <th>Total</th>
        <th> {/* I think leave blank for the button */} </th>
      </tr>

      {cart.map((item) => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.price}$</td>
            <td>
              <button className={styles.qty__button} onClick={() => updateCartQty(item, true)}>
                +
              </button>
              {item.quantity}
              <button className={styles.qty__button} onClick={() => updateCartQty(item, false)}>
                -
              </button>
            </td>
            <td>{item.price * item.quantity}$</td>
            <td>
              <button onClick={() => removeItem(item.id)} className={styles.removeBtn}>remove</button>
            </td>
          </tr>
        );
      })}

      <tr>
        <td colSpan={2}> Total</td>
        <td>{totalQuantity}</td>
        <td>{total}$</td>
        <td>
          <button onClick={() => cart.length === 0 ? alert("cannot checkout with no items") : alert("checked out ✅")} className={styles.chkOutBtn}>Checkout</button>
        </td>
      </tr>
    </table>
  );
};

export default ShoppingTable;
