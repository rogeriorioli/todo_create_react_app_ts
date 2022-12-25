import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
` 
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
` 
export const TaskWrraper = styled.div`
  max-width: 580px;
  min-width: 480px;
  padding: 16px;
  margin: 20px 0;
  h2 {
    text-align: center;
    margin: 10px 0; 
  }
  p {
    text-align: center;
    text-transform: uppercase;
  }

`