import "./cartContent.scss";
import { useProductStore } from "../../store/cart";

const Cart = () => {
  const { cart } = useProductStore.getState();
  const cartItem = cart.map(({ name, price, qnty }) => {
    return (
      <>
        <div className="cartItem-wrapper">
          <p>{name}</p>
          <p>
            {qnty} á ${price}
          </p>
          <p>${Number(qnty) * price}</p>
        </div>
        <div className="button-wrapper">
          <button>-</button>
          <button>+</button>
        </div>
      </>
    );
  });
  const total = cart.reduce(
    (acc, cur) => (acc += cur.price * Number(cur.qnty)),
    0
  );
  return (
    <section className="cart-wrapper">
      <h2>MY POKE CART</h2>
      <div className="cart-tags">
        <h2>PRODUCTS</h2>
        <h2>AMOUNT</h2>
        <h2>PRICE</h2>
      </div>
      {cartItem}
      <section className="cart-total-wrapper">
        <h2>TOTAL:${total}</h2>
      </section>
    </section>
  );
};

export default Cart;
