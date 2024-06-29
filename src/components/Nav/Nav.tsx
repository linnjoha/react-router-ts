import Logo from "../UI/Logo/Logo";
import Cart from "../../assets/cart.svg";
import Navigation from "./Navigation";
import "./nav.scss";
import { navigationLinks } from "../constants/constants";
// import { useCountStore } from "../../store/count";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store/cart";

const Nav = () => {
  const { cart } = useProductStore();
  const count = cart?.reduce((acc, cur) => (acc += Number(cur.qnty)), 0);
  return (
    <nav className="nav">
      <Logo />
      <Navigation navigationLinks={navigationLinks} />
      <Link to="/cartcontent">
        <picture className="nav__image-wrapper">
          <img src={Cart} alt="" />
          <p className="nav__image-wrapper--count">{count}</p>
        </picture>
      </Link>
    </nav>
  );
};

export default Nav;
