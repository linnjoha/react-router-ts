import { useProductStore } from "../store/cart";
import { useParams } from "react-router-dom";
import { Props } from "../components/Card/Card";
import { data, imageString } from "../components/constants/constants";
import "./product.scss";
import { useState } from "react";
import { useCountStore } from "../store/count";

//Efter att ett villkor är mött, ska vi rendera produktinformationen.

//Om id´t i parametern, matchar id´t i data objektet.
//Rendera JSX (Visa Rätt UI för användaren)
const Product = () => {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  /*   const [count, setCount] = useState<number>(0); */
  const { count, decrement, increment } = useCountStore();
  const { cart, add } = useProductStore();

  const pokemon = data.find((pokemon) => pokemon.id === id);

  const { desc, name, buttonText } = pokemon as Props;

  const handleClick = () => {
    setShow((prevValue) => !prevValue);
  };

  return (
    <section className="product-wrapper">
      <picture>
        <img src={imageString} alt="" />
      </picture>
      <article className="product-wrapper__product-info">
        {show && (
          <>
            <h4>{name}</h4>
            <p>{desc}</p>
            <div className="add-to-cart">
              <button disabled={count < 1} onClick={decrement}>
                -
              </button>
              <p>{count}</p>
              <button onClick={increment}>+</button>
            </div>
            <button onClick={() => add(pokemon)}>ADD TO CART</button>
          </>
        )}
        <button onClick={handleClick}>{buttonText}</button>
      </article>
    </section>
  );
};

export default Product;
