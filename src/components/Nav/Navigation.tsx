import "./navigation.scss";
import { NavLink } from "react-router-dom";

type NavigationProps = {
  navigationLinks: {
    name: string;
    href: string;
  }[];
};

const Navigation = ({ navigationLinks }: NavigationProps) => {
  const links = navigationLinks.map(({ name, href }) => (
    <li key={name}>
      <NavLink to={href}>{name}</NavLink>
    </li>
  ));
  return <ul className="navigation-wrapper">{links}</ul>;
};

export default Navigation;
