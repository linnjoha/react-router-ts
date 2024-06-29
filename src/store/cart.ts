import { create } from "zustand";
import { Product } from "./product";
import { useCountStore } from "./count";
interface ProductState {
  cart: Product[];
  add: (obj?: Product) => void;
  remove: () => void;
}
const addToCart = (cart: Product[], qnty: number, obj?: Product) => {
  console.log(cart);
  if (obj && cart) {
    const exists = cart.find((p) => p.id === obj.id);
    if (exists) {
      exists.qnty = getQnty(exists.id, cart, qnty);
    } else {
      obj.qnty = qnty;
      cart.push(obj);
    }
  }
};

const getValueFromStoredSession = () => {
  const storedData = window.sessionStorage.getItem("key");
  if (!storedData) return [];
  console.log(storedData);
  const parsedData = JSON.parse(storedData as any);
  console.log(JSON.parse(storedData as any));
  return parsedData;
};
const getQnty = (id: string, cart: Product[], qnty: number) => {
  cart.forEach((product) => {
    if (id === product.id) {
      qnty = qnty + Number(product.qnty);
    }
  });
  return qnty;
};

export const useProductStore = create<ProductState>()((set, get) => ({
  cart: getValueFromStoredSession(),
  add: (obj?: Product) => {
    const { cart } = get();
    const { count, reset } = useCountStore.getState();
    addToCart(cart, count, obj);
    set({ cart });
    if (cart.length) {
      window.sessionStorage.setItem("key", JSON.stringify(cart));
      reset();
    }
  },
  remove: () => void {},
}));

//remove qnty.
