import styled from "styled-components";

/* 
color - color
fs - font size
m - margin
p - padding
ta - textAlign
w - width
*/

export const Button = styled.button`
  background-color: ${({ bg }) => (bg ? bg : "var(--color-1-dark)")};
  border-radius: var(--border-radius);
  box-shadow: -2px 2px 2px #ffffff55;
  border: ${({ border }) => (border ? border : "none")};
  color: ${({ color }) => (color ? color : "var(--color-light)")};
  font-size: ${({ fs }) => (fs ? fs : "clamp(.8rem, 1.6vw, 1rem)")};
  font-weight: 400;
  margin: ${({ m }) => (m ? m : ".5rem 1rem")};
  overflow: hidden;
  padding: ${({ p }) => (p ? p : ".5rem 1rem")};
  position: relative;
  transition: var(--transition);
  text-align: ${({ ta }) => (ta ? ta : "center")};
  width: ${({ w }) => (w ? w : "fit-content")};
  &:hover {
    box-shadow: 0px 0px 1px #ffffff;
    color: ${({ hcolor }) => (hcolor ? hcolor : "var(--color-light)")};
  }
  &:active{
    box-shadow: inset 0px 0px 2px 2px #ffffff33;
    color: var(--color-2-light);
  }

`;
