import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
` 

export const LoginWrapper = styled.div `
  background-color: #fff;
  border : 1px solid #ccc;
  box-shadow: 0px 0px 4px 0px #33333324;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  width: 320px;
  padding: 16px;
  form {
    width: 100%;
    padding: 10px 0;
  }
  p {
    color : #666;
    margin: 20px 0;
  }
`

export const Title = styled.h2 `
  color : #333;
  font-size: 22px;
  text-align: center;
  width: 100%;
`