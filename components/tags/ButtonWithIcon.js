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
  background-color: ${({ reset, bg }) =>
    reset ? "transparent" : bg ? bg : "var(--color-blue)"};
  border-radius: ${({ br }) => (br ? br : "var(--border-radius)")};
  border: ${({ reset }) => (reset ? "1px solid var(--color-3-error)" : "none")};
  color: ${({ color, reset }) =>
    reset ? "var(--color-3-error)" : color ? color : "var(--color-light)"};
  font-size: ${({ fs }) => (fs ? fs : "clamp(.8rem, 1.6vw, 1rem)")};
  font-weight: ${({ fw }) => (fw ? fw : "200")};
  margin: ${({ m }) => (m ? m : "0")};
  margin-top: ${({ mt }) => (mt ? mt : "0.25rem")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0.25rem")};
  overflow: hidden;
  white-space: nowrap;
  padding: ${({ p }) => (p ? p : "0.5rem 1rem")};
  transition: var(--transition);
  text-align: ${({ ta }) => (ta ? ta : "center")};
  width: ${({ w }) => (w ? w : "100%")};
  display: flex;
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  gap: ${({ gap }) => (gap ? gap : ".5rem")};
  &:active{
    box-shadow: inset 0px 0px 2px 2px var(--glass);
    color: var(--color-2-light);
  }
  &:hover{
    color: var(--color-light);
    background-color: ${({ reset }) =>
      reset ? "var(--color-3-error)" : "var(--color-blue-dark)"};
    border-color: transparent;
  }
`;
