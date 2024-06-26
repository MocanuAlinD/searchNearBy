import styled from "styled-components";

/* 
bg - background
p - padding
m - margin
display - display
js - justify-content
ai - align-items
fd - flex-direction
fg - flex-grow
fw - font-weight
fs - font-size
h - height
w - width
ws - white-space
minh - min-height
maxh - max-height
minw - min-width
maxw - max-width
qwrap - query flex-wrap
color - color

*/


//// facut dincolo
export const Container = styled.div`
  margin: ${({ m }) => (m ? m : "0")};
  padding: ${({ p }) => (p ? p : "1rem 0")};
  display: flex;
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  border: ${({ border }) => border && "1px solid red"};
  flex-grow: 1;
  gap: ${({ gap }) => (gap ? gap : "0")};
  background: ${({ bg }) => (bg ? bg : "transparent")};
`;

export const SmallContainer = styled.div`
  background: ${({ bg }) => (bg ? "var(--glass)" : "")};
  backdrop-filter: ${({ bg }) => bg && "var(--blur)"};
  border: ${({ border }) => (border ? "var(--card-border)" : "none")};
  margin: ${({ m }) => (m ? m : "auto")};
  padding: ${({ p }) => (p ? p : "var(--padding)")};
  border-radius: var(--border-radius);
  display: flex;
  justify-content: ${({ jc }) => (jc ? jc : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  align-self: center;
  height: ${({ h }) => (h ? h : "fit-content")};
  min-height: ${({ mh }) => (mh ? "21rem" : "fit-content")};
  width: ${({ w }) => (w ? w : "min(97%, 40rem)")};
`;

export const Wrapper = styled.div`
  background: ${({ bg }) => bg && "var(--glass)"};
  backdrop-filter: ${({ bg }) => bg && "var(--blur)"};
  border-radius: ${({ br }) => (br ? br : "var(--border-radius)")};
  display: flex;
  justify-content: ${({ jc }) => jc && jc};
  align-items: ${({ ai }) => (ai ? ai : "")};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  margin: ${({ m }) => (m ? m : "0.25rem 0")};
  padding: ${({ p }) => (p ? p : "0")};
  width: ${({ w }) => (w ? w : "100%")};
  min-height: ${({ mh }) => mh && mh};
  height: ${({ h }) => h && h};
  gap: ${({ gap }) => (gap ? gap : "0")};
  border: ${({ border, b }) =>
    b ? "1px solid red" : border && "var(--card-border)"};
  @media (width < 450px) {
    flex-wrap: ${({ qwrap }) => (qwrap ? qwrap : "nowrap")};
    justify-content: ${({ mjc }) => (mjc ? mjc : "space-between")};
    width: ${({ mw }) => (mw ? mw : "")}
  }
`;

export const SelectCustom = styled.select`
  outline: none;
  border: none;
  /* background: ${({ bg }) => (bg ? bg : "var(--bg-input)")}; */
  background: ${({ bg }) => (bg ? bg : "transparent")};
  /* border-bottom: ${({ bb }) =>
    bb ? bb : "2px solid var(--color-1-dark)"}; */
  border: ${({ border }) => (border ? border : "var(--card-border)")};
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  color: var(--color-light);
  font-size: ${({ fs }) => (fs ? fs : "var(--fs083)")};
  font-weight: ${({ fw }) => (fw ? fw : "var(--fw200)")};
  padding: 0.3rem;
  transition: var(--transition);
  margin: .25rem 0;
  width: 100%;
  :focus {
    background-color: var(--bg-input);
    border-bottom: var(--color-border-bottom-error);
    color: var(--color-light);
  }
`;

export const LabelCustom = styled.label`
  color: var(--color-light);
  width: fit-content;
  margin: ${({ m }) => (m ? m : "0")};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
  font-size: var(--fs083);
  font-weight: ${({ fw }) => (fw ? fw : "var(--fw200)")};
`;

export const InputCustom = styled.input`
  /* background-color: var(--bg-input); */
  background-color: transparent;
  border: none;
  /* border-bottom: 2px solid var(--color-1-dark); */
  border: var(--card-border);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  color: var(--color-light);
  flex-grow: ${({ fg }) => (fg ? fg : 1)};
  font-size: var(--fs083);
  font-weight: ${({ fw }) => (fw ? fw : "var(--fw200)")};
  margin: ${({ m }) => (m ? m : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0.25rem")};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  outline: none;
  padding: ${({ p }) => (p ? p : ".1rem .25rem")};
  position: relative;
  text-indent: 0.3rem;
  transition: var(--transition);
  width: ${({ w }) => w && w};
  min-width: ${({ minw }) => minw && minw};
  
  ::placeholder {
    color: var(--color-placeholder);
    transition: var(--transition);
  }
  :focus {
    background-color: var(--bg-input);
    border-bottom: var(--color-border-bottom-error);
    color: var(--color-light);
  }
  :focus::placeholder {
    color: var(--color-focus-placeholder);
  }
  & + span {
    color: var(--color-yellow);
    display: none;
    font-weight: 200;
    font-size: .7rem;
    letter-spacing: 0.02rem;
  }
  &:focus:placeholder-shown + span {
    display: block;
  }
  &:not(:placeholder-shown):invalid + span {
    display: block;
  }
  &:invalid{
    color: var(--color-yellow);
    background: var(--bg-input);
  }
  &[type="date"]{
    color: var(--color-light);
    color-scheme: dark;
  }
`;

export const TextAreaCustom = styled.textarea`
  background-color: transparent;
  border: var(--card-border);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  text-indent: 0.3rem;
  font-size: var(--fs083);
  font-weight: ${({ fw }) => (fw ? fw : "var(--fw200)")};
  color: var(--color-light);
  resize: none;
  transition: var(--transition);
  padding: 0.4rem .2rem;
  outline: none;
  ::placeholder {
    color: var(--color-placeholder);
    transition: var(--transition);
  }
  :focus {
    background-color: var(--bg-input);
    color: var(--color-light);
    border-bottom: var(--color-border-bottom-error);
  }
  :focus::placeholder {
    color: var(--color-focus-placeholder);
  }
  & + span {
    display: none;
    font-weight: 400;
    font-size: var(--fs083);
    color: var(--color-yellow);
    letter-spacing: 0.02rem;
    margin-top: .35rem;
  }
  &:focus:placeholder-shown + span {
    display: block;
  }
  &:not(:placeholder-shown):invalid + span {
    display: block;
  }
  &:invalid{
  }
`;

export const LabelSmallCustom = styled.label`
  color: ${({ char, maxChar }) =>
    char < maxChar ? "whitesmoke" : "var(--color-1-dark)"};
  font-size: 0.8rem;
  font-weight: ${({ fw }) => (fw ? fw : "var(--fw200)")};
  text-align: right;
  padding: .2rem .5rem 0 0;
  margin: 0;
`;



//// toate H facute dincolo
export const H1Custom = styled.h4`
  color: ${({ color }) => (color ? color : "var(--color-light)")};
  font-size: ${({ fs }) => (fs ? fs : "1rem")};
  font-weight: ${({ fw }) => (fw ? fw : "var(--fw400)")};
  background: ${({ bg }) => (bg ? bg : "")};
  margin: ${({ m }) => (m ? m : "0")};
  padding: ${({ p }) => (p ? p : "0")};
  width: ${({ w }) => (w ? w : "fit-content")};
  white-space: ${({ ws }) => (ws ? ws : "wrap")};
  text-align: ${({ ta }) => (ta ? ta : "center")};
  border: ${({ border }) => border && "var(--card-border)"};
  user-select: none;
  cursor: ${({ cursor }) => (cursor ? cursor : "pointer")};
  text-decoration: ${({ underline }) => underline && "underline"};
`;

export const H2Custom = styled(H1Custom)`
  font-size: ${({ fs }) => (fs ? fs : "var(--fs150")};
`;

export const H3Custom = styled(H1Custom)`
  font-size: ${({ fs }) => (fs ? fs : "var(--fs117")};
`;

export const H4Custom = styled(H1Custom)`
  font-size: ${({ fs }) => (fs ? fs : "var(--fs1)")};
`;

export const H5Custom = styled(H1Custom)`
  font-size: ${({ fs }) => (fs ? fs : "var(--fs083)")};
`;
export const H6Custom = styled(H1Custom)`
  font-size: ${({ fs }) => (fs ? fs : "var(--fs067)")};
`;

export const ParaCustom = styled.p`
margin: ${({ m }) => (m ? m : "0")};
padding: ${({ p }) => (p ? p : "0")};
color: ${({ color }) => (color ? color : "var(--color-light)")};
font-weight: ${({ fw }) => (fw ? fw : "var(--fw200)")};
font-size: ${({ fs }) => (fs ? fs : "var(--fs1)")};
font-family: ${({ ff }) => (ff ? ff : "Poppins, Sans Serif")};
width: ${({ w }) => (w ? w : "100%")};
text-align: ${({ ta }) => (ta ? ta : "justify")};
letter-spacing: 1px;
line-height: var(--line-height);
border: ${({ border }) => border && "var(--card-border)"} ;
`;

/* 
FORMAT
 <InputContainer className="inputContainer">
    <input type="text" className="input"
          placeholder=" "
          id="idForLabel" />
    <label htmlFor="idForLabel" className="label">
        cauta....
    </label>
</InputContainer>
*/
export const InputContainer = styled.div`
  position: relative;
  font-family: Poppins, sans-serif;
  font-weight: ${({ fw }) => (fw ? fw : "var(--fw200)")};
  margin-top: ${({ mt }) => (mt ? mt : "0.7rem")};
  flex-grow: 1;
  label {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: ${({ ml }) => (ml ? ml : "0.5rem")};
    color: ${({ labelColor }) =>
      labelColor ? labelColor : "var(--color-placeholder)"};
    transition: var(--transition);
    font-size: ${({ fs }) => (fs ? fs : "var(--fs083)")};
    display: flex;
    align-items: center;
    cursor: text;
    height: 100%;
  }
  input {
    background-color: ${({ inputbg }) => (inputbg ? inputbg : "transparent")};
    border: ${({ inputbb }) => (inputbb ? inputbb : "var(--card-border)")};
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    color: ${({ inputColor }) =>
      inputColor ? inputColor : "var(--color-1-dark)"};
  font-weight: ${({ fw }) => (fw ? fw : "var(--fw200)")};
    font-size: ${({ fs }) => (fs ? fs : "1rem")};
    outline: none;
    padding: 0.3rem 0;
    text-indent: ${({ inputTextIndent }) =>
      inputTextIndent ? inputTextIndent : ".5rem"};
    transition: var(--transition);
    width: ${({ inputw }) => (inputw ? inputw : "100%")};
    
  }
  input:focus {
    background-color: var(--bg-input);
    border-bottom: var(--color-border-bottom-error);
    color: var(--color-light);
  }
  input:focus + label {
    top: -75%;
    margin-left: 0.2rem;
    font-size: ${({ fs }) => fs && `calc(${fs} - 0.1rem)`};
    color: var(--color-light);
  }
  input:not(:focus, :placeholder-shown) {
    color: ${({ labelColor }) =>
      labelColor ? labelColor : "var(--color-light)"};
  }
  input:not(:focus, :placeholder-shown) + label {
    top: -75%;
    margin-left: 0.2rem;
    font-size: ${({ fs }) => fs && `calc(${fs} - 0.1rem)`};
    color: var(--color-light);
  }
`;
