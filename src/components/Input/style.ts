import styled from "styled-components";

export const InputWrapper = styled.div`

  width: 100%;
  height: 40px;
  transition: all 0.3s;
  border: 1px solid #ccc;
  margin: 10px 0;
  &:focus-within {
    border: 1px solid indigo;
  }
  label {
    font-size: 16px;
    width: 100%;
    display: block;
    margin: 10px 0;
  }
  input {
    width: 100%;
    height: 38px;
    padding: 5px;
    border: none;
    &:focus {
      outline: none;
    }
  }

`