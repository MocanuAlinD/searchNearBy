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
  background: ${(props) => (props.bg ? props.bg : "#222")};
  padding: ${(props) => (props.p ? props.p : "0 0")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) => (props.js ? props.js : "flex-start")};
  align-items: ${(props) => (props.ai ? props.ai : "center")};
  flex-direction: ${(props) => (props.fd ? props.fd : "row")};
  height: ${(props) => (props.h ? props.h : "fit-content")};
  min-height: ${(props) => (props.minh ? props.minh : "100vh")};
  /* font-family: Poppins, sans-serif; */
  margin: ${(props) => props.m && props.m};
`;

export const SmallContainer = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) => (props.jc ? props.jc : "center")};
  align-items: ${(props) => (props.ai ? props.ai : "center")};
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  background: ${(props) => (props.bg ? props.bg : "transparent")};
  width: ${(props) => (props.w ? props.w : "30rem")};
  height: ${(props) => (props.h ? props.h : "fit-content")};
  min-height: ${(props) => (props.minh ? props.minh : "100%")};
  margin: ${(props) => (props.m ? props.m : "1rem 0")};
  padding: ${(props) => (props.p ? props.p : "0 0")};
  /* font-family: Poppins, sans-serif; */
  transition: var(--transition);
  @media (max-width: 520px) {
    width: 90%;
    margin: 1rem 2rem;
  }
`;

export const Wrapper = styled.div`
  align-items: ${(props) => props.ai && props.ai};
  background: ${(props) => props.bg && props.bg};
  border: ${(props) => props.border && props.border};
  color: var(--color-light);
  display: ${(props) => (props.display ? props.display : "flex")};
  flex-direction: ${(props) => (props.fd ? props.fd : "column")};
  flex-grow: ${(props) => props.fg && props.fg};
  flex-wrap: ${(props) => props.qwrap && props.qwrap};
  height: ${(props) => (props.h ? props.h : "fit-content")};
  justify-content: ${(props) => props.jc && props.jc};
  margin: ${(props) => (props.m ? props.m : "0.25rem 0")};
  min-height: ${(props) => props.minh && props.minh};
  overflow: ${(props) => props.overflow && props.overflow};
  overflow-x: ${(props) => props.overflowx && props.overflowx};
  overflow-y: ${(props) => props.overflowy && props.overflowy};
  padding: ${(props) => (props.p ? props.p : "0 0")};
  width: ${(props) => (props.w ? props.w : "100%")};
  @media (max-width: 450px) {
    flex-wrap: ${(props) => (props.qwrap ? props.qwrap : "nowrap")};
    justify-content: space-between;
    width: 100%;
  }
`;

export const SelectCustom = styled.select`
  background: ${(props) =>
    props.bg ? props.bg : "var(--color-inputbackground)"};
  color: var(--color-light);
  outline: none;
  border: none;
  border-bottom: 2px solid var(--color-blue-light);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
  font-weight: 200;
  padding: 0.3rem;
  transition: var(--transition);
  margin: ${(props) => (props.m ? props.m : "0")};
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "fit-content")};
  :focus {
    background: var(--color-light);
    border-bottom: 2px solid var(--color-orange);
    color: var(--color-dark);
  }
  @media (max-width: 567px) {
    font-size: ${(props) =>
      props.fs ? `calc(${props.fs - "0.5rem"})` : ".8rem"};
  }
`;

export const InputCustom = styled.input`
  color: var(--color-light);
  background: var(--color-inputbackground);
  outline: none;
  border: none;
  border-bottom: 2px solid var(--color-blue-light);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  font-weight: 200;
  text-indent: 0.3rem;
  width: ${(props) => props.w && props.w};
  min-width: ${(props) => props.minw && props.minw};
  padding: ${(props) => (props.p ? props.p : ".1rem .25rem")};
  position: relative;
  margin: ${(props) => (props.m ? props.m : "0")};
  margin-bottom: ${(props) => (props.mb ? props.mb : "0")};
  transition: var(--transition);
  flex-grow: ${(props) => (props.fg ? props.fg : 1)};
  ::placeholder {
    color: var(--color-placeholder);
    transition: var(--transition);
  }
  :focus {
    background: var(--color-light);
    color: var(--color-dark);
    border-bottom: 2px solid var(--color-orange);
  }
  :focus::placeholder {
    color: var(--color-darkish);
  }
  & + span {
    display: none;
    font-weight: 400;
    font-size: .8rem;
    color: var(--color-orange);
    letter-spacing: .02rem;
  }
  &:focus:placeholder-shown + span {
    display: block;
  }
  &:not(:placeholder-shown):invalid + span {
    display: block;
  }
`;

export const TextAreaCustom = styled.textarea`
  background: var(--color-inputbackground);
  border: none;
  border-bottom: 2px solid var(--color-blue-light);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  text-indent: 0.3rem;
  font-weight: 200;
  color: var(--color-light);
  resize: none;
  transition: var(--transition);
  padding: 0.5rem;
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
    font-size: .8rem;
    color: var(--color-orange);
    letter-spacing: .02rem;
  }
  /* &:focus + span{
    display: none;
    background: coral;
  } */
  &:focus:placeholder-shown + span {
    display: block;
  }
  &:not(:placeholder-shown):invalid + span {
    display: block;
  }
`;

export const LabelCustom = styled.label`
  color: var(--color-light);
  width: ${(props) => (props.w ? props.w : "fit-content")};
  margin: ${(props) => (props.m ? props.m : ".3rem 0")};
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
`;

export const LabelSmallCustom = styled.label`
  color: ${(props) => (props.char < props.maxChar ? "whitesmoke" : "#888")};
  /* font-family: Poppins, sans-serif; */
  font-size: 0.8rem;
  text-align: right;
  padding: 0.2rem 0.5rem;
`;

export const H4Custom = styled.h4`
  color: ${(props) => (props.color ? props.color : "whitesmoke")};
  font-size: ${(props) => (props.fs ? props.fs : "1.2rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "400")};
  background: ${(props) => (props.bg ? props.bg : "")};
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) => (props.jc ? props.js : "center")};
  align-items: ${(props) => (props.ai ? props.ai : "center")};
  margin: ${(props) => (props.m ? props.m : "0")};
  padding: ${(props) => (props.p ? props.p : "0")};
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const H6Custom = styled.h4`
  color: ${(props) => (props.color ? props.color : "whitesmoke")};
  background: ${(props) => (props.bg ? props.bg : "transparent")};
  font-size: ${(props) => (props.fs ? props.fs : "1rem")};
  font-weight: ${(props) => (props.fw ? props.fw : "200")};
  width: ${(props) => (props.w ? props.w : "fit-content")};
  height: ${(props) => props.h && props.h};
  margin: ${(props) => (props.m ? props.m : "0")};
  // @media (max-width: 500px) {
  //   font-size: ${(props) => (props.fs ? props.fs : ".65rem")};
  // }
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
  font-weight: ${(props) => (props.fw ? props.fw : "200")};
  margin-top: ${(props) => (props.mt ? props.mt : "2.2rem")};
  flex-grow: 1;
  .label {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: ${(props) => (props.ml ? props.ml : "0.5rem")};
    color: ${(props) =>
      props.labelColor ? props.labelColor : "var(--color-placeholder)"};
    transition: var(--transition);
    font-size: ${(props) => (props.fs ? props.fs : "1.3rem")};
    display: flex;
    align-items: center;
    cursor: text;
    height: 100%;
  }
  .input {
    background: var(--color-inputbackground);
    background: ${(props) =>
      props.inputbg ? props.inputbg : "var(--color-inputbackground)"};
    border: none;
    border-bottom: ${(props) =>
      props.inputbb ? props.inputbb : "2px solid var(--color-blue-light)"};
    border-radius: 0.2rem 0.2rem 0 0;
    color: ${(props) =>
      props.inputColor ? props.inputColor : "var(--color-dark)"};
    font-family: Poppins, sans-serif;
    font-weight: 200;
    font-size: ${(props) => (props.fs ? props.fs : "1.3rem")};
    outline: none;
    padding: 0.3rem 0;
    text-indent: ${(props) =>
      props.inputTextIndent ? props.inputTextIndent : ".5rem"};
    transition: var(--transition);
    width: ${(props) => (props.inputw ? props.inputw : "100%")};
  }
  .input:focus {
    background: var(--color-light);
    border-bottom: 2px solid var(--color-orange);
  }
  .input:focus + .label {
    top: -75%;
    margin-left: 0.2rem;
    font-size: ${(props) => props.fs && `calc(${props.fs} - 0.2rem)`};
    color: var(--color-light);
  }
  .input:not(:focus, :placeholder-shown) {
    color: var(--color-light);
  }
  .input:not(:focus, :placeholder-shown) + .label {
    top: -75%;
    margin-left: 0;
    font-size: ${(props) => props.fs && `calc(${props.fs} - 0.2rem)`};
    color: var(--color-light);
  }
`;
