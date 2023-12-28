import { styled } from 'styled-components';


export const SignInButton = styled.button`
padding: 16px 24px;
border: none;
background-color: transparent;
color: white;
cursor: pointer;
`

export const RegisterButton = styled.button`
padding: 16px 24px;
background-color: #141e33;
border-radius: 12px;
color: white;
cursor: pointer;
`

export const HomeHeader = styled.header`
max-width: 1170px;
margin: 0 auto;
padding: 0 24px;
width: 100%;
min-height: 90px;
display: flex;
justify-content: space-between;
align-items: center;
justify-self: start;

div {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

div img {
  width: 55px;
  height: 55px;
  border-radius: 100%;
}

div h1 {
  color: white;
  font-size: 24px;
}

@media (max-width: 640px){
  padding: 0 12px;
  
  div img {
  width: 30px;
  height: 30px;
}

div h1 {
  font-size: 18px;
}
}
`

export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
`