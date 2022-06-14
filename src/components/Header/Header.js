import Menu from "./Menu";
import MenuLink from "./MenuLink";

function Header() {
  return (
    <>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/contact" isActive>
          Contact
        </MenuLink>
        <MenuLink to="/posts">Posts</MenuLink>
      </Menu>
    </>
  );
}

export default Header;
