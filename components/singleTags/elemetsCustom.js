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

export const Container = styled.div`
  margin: ${({ m }) => (m ? m : "0")};
  padding: ${({ p }) => (p ? p : "0")};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
`;

export const SmallContainer = styled.div`
  margin: ${({ m }) => (m ? m : "auto")};
  padding: ${({ p }) => (p ? p : "var(--padding)")};
  background: ${({ bg }) => (bg ? "var(--glass)" : "")};
  backdrop-filter: ${({ bg }) => bg && "blur(55px)"};
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
  background: ${({ bg }) => bg && "var(---glass)"};
  backdrop-filter: ${({ bg }) => bg && "blur(55px)"};
  border-radius: var(--border-radius);
  border: ${({ border }) => border && border};
  display: flex;
  color: var(--color-1-dark);
  justify-content: ${({ jc }) => jc && jc};
  align-items: ${({ ai }) => ai && ai};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  margin: ${({ m }) => (m ? m : "0.25rem 0")};
  padding: ${({ p }) => (p ? p : "0")};
  width: ${({ w }) => (w ? w : "100%")};
  min-height: ${({ mh }) => mh && "20rem"};
  gap: ${({ gap }) => (gap ? gap : "0")};
  @media (max-width: 450px) {
    flex-wrap: ${({ qwrap }) => (qwrap ? qwrap : "nowrap")};
    justify-content: space-between;
  }
`;

export const SelectCustom = styled.select`
  background: ${({ bg }) => (bg ? bg : "var(--bg-input)")};
  color: var(--color-light);
  outline: none;
  border: none;
  border-bottom: var(--border-blue);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  font-size: ${({ fs }) => (fs ? fs : "var(--font-size1)")};
  font-weight: 200;
  padding: 0.3rem;
  transition: var(--transition);
  margin: .25rem 0;
  width: 100%;
  :focus {
    background-color: var(--bg-input);
    border-bottom: var(--border-bottom-error);
    color: var(--color-light);
  }
`;

export const LabelCustom = styled.label`
  color: var(--color-light);
  width: fit-content;
  margin: ${({ m }) => (m ? m : "0")};
  margin-top: ${({ mt }) => (mt ? mt : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
  font-size: var(--font-size08);
  font-weight: ${({ fw }) => (fw ? fw : "200")};
`;

export const InputCustom = styled.input`
  background-color: var(--bg-input);
  border: none;
  border-bottom: var(--border-blue);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  color: var(--color-light);
  flex-grow: ${({ fg }) => (fg ? fg : 1)};
  font-size: var(--font-size1);
  font-weight: 200;
  margin: ${({ m }) => (m ? m : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
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
    border-bottom: var(--border-bottom-error);
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
`;

export const TextAreaCustom = styled.textarea`
  background-color: var(--bg-input);
  border: none;
  border-bottom: var(--border-blue);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  text-indent: 0.3rem;
  font-size: var(--font-size1);
  font-weight: 200;
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
    border-bottom: var(--border-bottom-error);
  }
  :focus::placeholder {
    color: var(--color-focus-placeholder);
  }
  & + span {
    display: none;
    font-weight: 400;
    font-size: var(--font-size08);
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
  font-weight: 200;
  text-align: right;
  padding: .2rem .5rem 0 0;
  margin: 0;
`;

export const H4Custom = styled.h4`
  color: ${({ color }) => (color ? color : "var(--color-light)")};
  font-size: ${({ fs }) => (fs ? fs : "")};
  /* font-size: clamp(0.8rem, 2.5vw, 1.43rem); */
  font-weight: ${({ fw }) => (fw ? fw : "400")};
  background: ${({ bg }) => (bg ? bg : "")};
  display: ${({ display }) => (display ? display : "flex")};
  justify-content: ${({ jc }) => (jc ? js : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  margin: ${({ m }) => (m ? m : "0 0 1rem 0")};
  padding: ${({ p }) => (p ? p : "0")};
  width: ${({ w }) => (w ? w : "fit-content")};
  white-space: ${({ ws }) => (ws ? ws : "nowrap")};
`;

export const H6Custom = styled(H4Custom)`
  color: ${({ color }) => (color ? color : "var(--color-light)")};
  font-size: ${({ fs }) => (fs ? fs : "")};
  font-weight: ${({ fw }) => (fw ? fw : "400")};
  background: ${({ bg }) => (bg ? bg : "")};
  display: ${({ display }) => (display ? display : "flex")};
  justify-content: ${({ jc }) => (jc ? js : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  margin: ${({ m }) => (m ? m : "0")};
  padding: ${({ p }) => (p ? p : "0")};
  width: ${({ w }) => (w ? w : "fit-content")};
  white-space: ${({ ws }) => (ws ? ws : "nowrap")};
`;

export const ParaCustom = styled.p`
margin: ${({ m }) => (m ? m : "0")};
padding: ${({ p }) => (p ? p : "0")};
color: ${({ clr }) => (clr ? clr : "var(--color-light)")};
font-weight: ${({ fw }) => (fw ? fw : "200")};
font-size: ${({ fs }) => (fs ? fs : ".9rem")};
width: ${({ w }) => (w ? w : "100%")};
text-align: ${({ ta }) => (ta ? ta : "justify")};
letter-spacing: 1px;
line-height: 1.25;
/* line-height: 135%; */
/* border: 1px solid red; */
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
  font-weight: ${({ fw }) => (fw ? fw : "200")};
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
    font-size: ${({ fs }) => (fs ? fs : "1rem")};
    display: flex;
    align-items: center;
    cursor: text;
    height: 100%;
  }
  input {
    background-color: ${({ inputbg }) =>
      inputbg ? inputbg : "var(--bg-input)"};
    border: none;
    border-bottom: ${({ inputbb }) =>
      inputbb ? inputbb : "var(--border-blue)"};
    border-radius: 0.2rem 0.2rem 0 0;
    color: ${({ inputColor }) =>
      inputColor ? inputColor : "var(--color-1-dark)"};
    font-weight: 200;
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
    border-bottom: var(--border-bottom-error);
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
