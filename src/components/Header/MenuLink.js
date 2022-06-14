import styled from "styled-components";

const Link = styled.a`
  background-color: ${(props) => (props.isActive ? "red" : "white")};
  text-decoration: none;
  color: black;
`;
const MenuItem = styled.li`
  text-decoration: none;
  width: 100%;
  padding: 10px 50px;
  display: inline-block;
  box-sizing: border-box;
`;

function MenuLink({ to, children, isActive }) {
  return (
    <>
      <MenuItem>
        <Link href={to} isActive={isActive}>
          {children}
        </Link>
      </MenuItem>
    </>
  );
}

export default MenuLink;
