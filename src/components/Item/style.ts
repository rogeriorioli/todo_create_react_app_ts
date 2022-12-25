import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  cursor: pointer;
  background-color: #ccc;
  &.done {
    background-color: #67cf89;
    border-bottom: 1px solid green;
    color : #fff;
    p{
      text-decoration: line-through;
    }
    cursor: not-allowed;
  }
  button {
    background: none;
    border: none;
  }
  p{
    text-transform: capitalize;
    flex: 1;
    width: 100%;
    padding-left: 10px;
    text-align: left;
  }
  span {
    font-size: 14px;
    color: #333;
  }
`