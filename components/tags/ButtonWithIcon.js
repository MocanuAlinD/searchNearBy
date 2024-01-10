import styled from "styled-components";

/* 
<ButtonWithIcon>
  <div className="iconContainer"><IconHere className="icon" /></div>
  Button text
</ButtonWithIcon>

props: 
color - color
hcolor - hover color
fs - font size
m - margin
p - padding
pl - padding-left
ta - textAlign
w - width
hasIcon
*/

export const ButtonWithIcon = styled.button`
  background-color: ${({ bg }) => (bg ? bg : "var(--color-1-dark)")};
  border-radius: var(--border-radius);
  box-shadow: -2px 2px 2px #ffffff55;
  border: ${({ border }) => (border ? border : "none")};
  color: ${({ color }) => (color ? color : "var(--color-2-light)")};
  font-size: ${({ fs }) => (fs ? fs : "clamp(.8rem, 1.6vw, 1rem)")};
  font-weight: 400;
  margin: ${({ m }) => (m ? m : "0")};
  margin-top: ${({ mt }) => (mt ? mt : "1rem")};
  margin-bottom: ${({ mb }) => (mb ? mb : "1rem")};
  overflow: hidden;
  white-space: nowrap;
  padding: ${({ hasIcon, p }) => (hasIcon ? ".4rem 0" : p ? p : "0.5rem 1rem")};
  padding-left: ${({ hasIcon, pl }) => (hasIcon ? "2.7rem" : pl ? pl : "1rem")};
  padding-right: ${({ pr }) => (pr ? pr : "1rem")} ;
  position: relative;
  transition: var(--transition);
  text-align: ${({ hasIcon, ta }) => (hasIcon ? "start" : ta ? ta : "center")};
  width: ${({ hasIcon, w }) => (hasIcon ? (w ? w : "100%") : w ? w : "100%")};
  .iconContainer {
    align-items: center;
    background-color: var(--color-2-dark);
    border-radius: 0 0 0.8rem 0;
    display: flex;
    display: ${({ hasIcon }) => (hasIcon ? "flex" : "none")};
    height: 100%;
    justify-content: flex-start;
    left: 0;
    position: absolute;
    padding: 0 0.35rem;
    top: 0;
    transition: var(--transition);
    width: fit-content;
    .icon {
      font-size: ${({ fs }) => (fs ? fs : "var(--font-size1)")};
    }
  }
  &:hover {
    background-color: ${({ bgHover }) => (bgHover ? bgHover : "")};
    padding-left: ${({ hasIcon, pl }) =>
      hasIcon ? ".5rem" : pl ? pl : "1rem"};
    width: ${({ hasIcon, w }) => (hasIcon ? (w ? w : "100%") : w ? w : "100%")};
    transition-delay: ${({ hasIcon }) => (hasIcon ? "0.15s" : "0")};
    box-shadow: 0px 0px 3px 1px var(--color-2-light);
    color: ${({ hcolor }) => (hcolor ? hcolor : "var(--color-light)")};
  }
  &:hover .iconContainer {
    transform: translateX(-100%);
    transform-origin: left;
    padding: 0;
  }
  &:active{
    box-shadow: inset 0px 0px 2px 2px #ffffff33;
    color: var(--color-2-light);
  }
`;
