import styled from "styled-components";

type ButtonStyleProps =  {
  bgColor : string
}

export const ButtonWrapper = styled.button<ButtonStyleProps>`
  width: 100%;
  border-radius: 4px;
  background-color: ${props => props.bgColor};
  color: #fff;
  padding: 15px 10px;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`