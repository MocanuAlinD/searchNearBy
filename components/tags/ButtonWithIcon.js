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
  background: ${({ bg }) => (bg ? bg : "var(--color-blue-darkish)")};
  border-radius: ${({ br }) => (br ? br : "var(--border-radius)")};
  border: ${({ border }) => (border ? border : "none")};
  color: ${({ color }) => (color ? color : "var(--color-light)")};
  font-size: ${({ fs }) => (fs ? fs : "clamp(.8rem, 1.6vw, 1rem)")};
  font-weight: ${({ fw }) => (fw ? fw : "200")};
  margin: ${({ m }) => (m ? m : "0")};
  margin-top: ${({ mt }) => (mt ? mt : "0.25rem")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0.25rem")};
  overflow: hidden;
  white-space: nowrap;
  padding: ${({ hasIcon, p }) => (hasIcon ? ".4rem 0" : p ? p : "0.5rem 1rem")};
  padding-left: ${({ hasIcon, pl }) => (hasIcon ? "2.7rem" : pl ? pl : "1rem")};
  padding-right: ${({ pr }) => (pr ? pr : "1rem")} ;
  position: relative;
  transition: var(--transition);
  text-align: ${({ hasIcon, ta }) => (hasIcon ? "start" : ta ? ta : "center")};
  width: ${({ hasIcon, w }) => (hasIcon ? (w ? w : "100%") : w ? w : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  &:active{
    box-shadow: inset 0px 0px 2px 2px var(--glass);
    color: var(--color-2-light);
  }
  &:hover{
    color: var(--color-light);
    background: var(--color-blue-dark);
    border-color: transparent;
  }
`;
