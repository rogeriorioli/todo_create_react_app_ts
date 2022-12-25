import styled from "styled-components";

export const UserWrapper = styled.div`
    width: 480px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


`


export const UserImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #000;
    margin-bottom: 20px;
`



export const UserName = styled.h2`
    color: #333;
    font-size: 22px;
    text-align: center;
    width: 100%;

`

export const Userlogin = styled.p`
    color: #666;
    margin: 10px 0;

`
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button {
    margin: 10px;
  }

`