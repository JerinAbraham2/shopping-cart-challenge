import style from "./Product.module.css";

const Product = ({ name, price, img, id, onClick }) => {
  return (
    <div className={style.container}>
      <img src={img} className={style.img}/>
      <div className={style.sidebar}>
        <p className={style.title}>{name}</p>
        <h6 className={style.price}>Price: <span>{price}</span>$</h6>
        <button className={style.button} onClick={() => onClick(id)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
