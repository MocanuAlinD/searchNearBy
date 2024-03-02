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

export const ButtonRotateCard = styled.button`
  background: ${({ bg }) => (bg ? bg : "transparent")};
  backdrop-filter: var(--blur);
  border-radius: ${({ br }) =>
    br ? br : "var(--border-radius) var(--border-radius) 0 0"};
  color: var(--color-light);
  font-size: ${({ fs }) => (fs ? fs : "clamp(.7rem, 1.6vw, 1rem)")};
  font-weight: ${({ fw }) => (fw ? fw : "400")};
  overflow: hidden;
  padding: ${({ p }) => (p ? p : "0.5rem 0rem")};
  transition: var(--transition);
  width: ${({ w }) => (w ? w : "100%")};
  transition-delay: .17s;
  border: var(--color-border-card);
  border-bottom: none;
`;
