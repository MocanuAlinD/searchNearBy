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
minh - min-height
maxh - max-height
minw - min-width
maxw - max-width
qwrap - query flex-wrap
color - color

*/

export const Container = styled.div`
  background: ${({ bg }) =>
    bg
      ? bg
      : "linear-gradient(to bottom right, var(--color-blue-light), var(--color-blue-dark))"};
  height: ${({ h }) => (h ? h : "fit-content")};
  min-height: ${({ minh }) => (minh ? minh : "100vh")};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const SmallContainer = styled.div`
  width: ${({ w }) => (w ? w : "30rem")};
  margin: ${({ m }) => (m ? m : "1rem 0")};
  @media (max-width: 520px) {
    width: 90%;
  }
`;

export const Wrapper = styled.div`
  background: ${({ bg }) => bg && bg};
  border: ${({ border }) => border && border};
  color: var(--color-light);
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  margin: ${({ m }) => (m ? m : "0.25rem 0")};
  @media (max-width: 450px) {
    flex-wrap: ${({ qwrap }) => (qwrap ? qwrap : "nowrap")};
    justify-content: space-between;
    width: 100%;
  }
`;

export const SelectCustom = styled.select`
  background: ${({ bg }) => (bg ? bg : "var(--color-inputbackground)")};
  color: var(--color-light);
  outline: none;
  border: none;
  border-bottom: 2px solid var(--color-blue-light);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  font-size: ${({ fs }) => (fs ? fs : "var(--font-size08)")};
  font-weight: 200;
  padding: 0.3rem;
  transition: var(--transition);
  margin: .25rem 0;
  width: 100%;
  :focus {
    background: var(--color-light);
    border-bottom: 2px solid var(--color-yellow);
    color: var(--color-dark);
  }
`;

export const LabelCustom = styled.label`
  color: var(--color-light);
  width: fit-content;
  margin: ${({ m }) => (m ? m : ".5rem 0 0 0")};
  font-size: var(--font-size08);
  font-weight: ${({ fw }) => (fw ? fw : "200")};
`;

export const InputCustom = styled.input`
  background-color: var(--color-inputbackground);
  border: none;
  border-bottom: 2px solid var(--color-blue-light);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  color: var(--color-light);
  flex-grow: ${({ fg }) => (fg ? fg : 1)};
  font-size: var(--font-size08);
  font-weight: 200;
  min-width: ${({ minw }) => minw && minw};
  margin: ${({ m }) => (m ? m : "0")};
  margin-bottom: ${({ mb }) => (mb ? mb : "0")};
  outline: none;
  padding: ${({ p }) => (p ? p : ".1rem .25rem")};
  position: relative;
  text-indent: 0.3rem;
  transition: var(--transition);
  width: ${({ w }) => w && w};
  ::placeholder {
    color: var(--color-placeholder);
    transition: var(--transition);
  }
  :focus {
    background: var(--color-light);
    border-bottom: 2px solid var(--color-yellow);
    color: var(--color-dark);
  }
  :focus::placeholder {
    color: var(--color-darkish);
  }
  & + span {
    color: var(--color-yellow);
    display: none;
    font-weight: 400;
    font-size: .8rem;
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
    background: var(--color-dark);
  }
`;

export const TextAreaCustom = styled.textarea`
  background: var(--color-inputbackground);
  border: none;
  border-bottom: 2px solid var(--color-blue-light);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  text-indent: 0.3rem;
  font-size: var(--font-size08);
  font-weight: 200;
  color: var(--color-light);
  resize: none;
  transition: var(--transition);
  padding: 0.4rem .2rem;
  ::placeholder {
    color: var(--color-placeholder);
    transition: var(--transition);
  }
  :focus {
    background: var(--color-light);
    color: var(--color-dark);
  }
  :focus::placeholder {
    color: var(--color-darkish);
  }
  & + span {
    display: none;
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--color-yellow);
    letter-spacing: 0.02rem;
  }
  &:focus:placeholder-shown + span {
    display: block;
  }
  &:not(:placeholder-shown):invalid + span {
    display: block;
  }
`;

export const LabelSmallCustom = styled.label`
  color: ${({ char, maxChar }) => (char < maxChar ? "whitesmoke" : "#888")};
  font-size: 0.8rem;
  font-weight: 200;
  text-align: right;
  padding: .2rem .5rem 0 0;
  margin: 0;
`;

export const H4Custom = styled.h4`
  color: ${({ color }) => (color ? color : "whitesmoke")};
  font-size: ${({ fs }) => (fs ? fs : "1.2rem")};
  font-weight: ${({ fw }) => (fw ? fw : "400")};
  background: ${({ bg }) => (bg ? bg : "")};
  display: ${({ display }) => (display ? display : "flex")};
  justify-content: ${({ jc }) => (jc ? js : "center")};
  align-items: ${({ ai }) => (ai ? ai : "center")};
  margin: ${({ m }) => (m ? m : "0")};
  padding: ${({ p }) => (p ? p : "0")};
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const H6Custom = styled.h4`
  color: ${({ color }) => (color ? color : "whitesmoke")};
  background: ${({ bg }) => (bg ? bg : "transparent")};
  font-size: ${({ fs }) => (fs ? fs : "1rem")};
  font-weight: ${({ fw }) => (fw ? fw : "200")};
  width: ${({ w }) => (w ? w : "fit-content")};
  height: ${({ h }) => h && h};
  margin: ${({ m }) => (m ? m : "0")};
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
  margin-top: ${({ mt }) => (mt ? mt : "1rem")};
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
    background: var(--color-inputbackground);
    background: ${({ inputbg }) =>
      inputbg ? inputbg : "var(--color-inputbackground)"};
    border: none;
    border-bottom: ${({ inputbb }) =>
      inputbb ? inputbb : "2px solid var(--color-blue-light)"};
    border-radius: 0.2rem 0.2rem 0 0;
    color: ${({ inputColor }) =>
      inputColor ? inputColor : "var(--color-dark)"};
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
    background: var(--color-light);
    border-bottom: 2px solid var(--color-yellow);
  }
  input:focus + label {
    top: -75%;
    margin-left: 0.2rem;
    font-size: ${({ fs }) => fs && `calc(${fs} - 0.1rem)`};
    color: var(--color-light);
  }
  input:not(:focus, :placeholder-shown) {
    color: var(--color-light);
  }
  input:not(:focus, :placeholder-shown) + label {
    top: -75%;
    margin-left: 0.2rem;
    font-size: ${({ fs }) => fs && `calc(${fs} - 0.1rem)`};
    color: var(--color-light);
  }
`;
