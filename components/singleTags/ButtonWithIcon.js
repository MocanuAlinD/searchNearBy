import styled from "styled-components";

/* 
<ButtonWithIcon>
  <div className="iconContainer"><IconHere className="icon" /></div>
  Button text
</ButtonWithIcon>

props: 
color - color
fs - font size
m - margin
p - padding
pl - padding-left
ta - textAlign
w - width
hasIcon
*/

export const ButtonWithIcon = styled.button`
  background: ${props => props.bg ? props.bg : "var(--color-blue-darkish)"};
  border-radius: var(--border-radius);
  border: none;
  color: ${(props) => (props.color ? props.color : "var(--color-light)")};
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
  margin: ${(props) => (props.m ? props.m : ".5rem 0")};
  overflow: hidden;
  padding: ${props => props.hasIcon ? ".5rem 0" : (props.p ? props.p : "0.5rem 0")};
  padding-left: ${(props) => props.hasIcon ? "2.7rem" : props.pl  ? props.pl : "0"};
  position: relative;
  transition: var(--transition);
  text-align: ${(props) =>
    props.hasIcon ? "start" : props.ta ? props.ta : "center"};
  width: ${props => props.hasIcon ? (props.w ? props.w : "100%") : props.w ? props.w : "100%"};
  .iconContainer {
    align-items: center;
    background: var(--color-blue-dark);
    border-radius: 0 0 .8rem 0;
    display: flex;
    display: ${props => props.hasIcon ? "flex" : "none"};
    height: 100%;
    justify-content: flex-start;
    left: 0;
    position: absolute;
    padding: 0 0.35rem;
    top: 0;
    transition: all 0.35s ease-out;
    width: fit-content;
    .icon {
      font-size: ${(props) => (props.fs ? props.fs : "1.3rem")};
    }
  }
  &:hover {
    background: ${props => props.bgHover ? props.bgHover : "var(--color-blue-dark)"};
    padding-left: ${(props) => (props.hasIcon ? ".5rem" : props.pl ? props.pl : "0")};
    width: ${props => props.hasIcon ? (props.w ? props.w : "100%") : props.w ? props.w : "100%"};
    transition-delay: ${props => props.hasIcon ? "0.15s": "0"};
  }
  &:hover .iconContainer {
    transform: translateX(-100%);
    transform-origin: left;
    padding: 0;
  }
`;
