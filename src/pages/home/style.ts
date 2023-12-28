import styled from 'styled-components';


export const HomeContainer = styled.section`
max-width: 1170px;
margin: 0 auto;
min-height: 100vh;
padding-bottom: 70px;
`

export const HomeContent = styled.div`
margin: 70px 0 170px;
display: flex;
gap: 24px;
flex-direction: column;
align-items: center;

main {
  text-align: center;
  margin: 0 auto;
}
main h1{
  font-size: 32px;
  line-height: 1.5;
  color: white;
  width: 90%;
  margin: 0 auto;
}

img{
  height: 290px;
  width: 830px;
}

@media (max-width: 1024px) {
  img {
    width: 620px;
  }
}

  @media (max-width: 640px) {
    main h1{
      font-size: 20px;
    }

  img {
    height: 124px;
    width: 270px;
  }
}
`

export const LoginSection = styled.div`
display: flex;
justify-content: space-between;
padding: 0 24px;

div {
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 48px;
  padding-bottom: 24px;
}

div h1{
  font-size: 32px;
  line-height: 1.5;
  color: white;
}

div div {
  flex-direction: row;
  justify-content: start;
}

img {
  width: 670px;
  height: 420px;
}

@media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    div{
      order: 1;
      margin-top: 30px;
    }

    img {
    width: 620px;
  }
  }

  @media (max-width: 640px) {

    div h1{
      font-size: 20px;
    }

  img {
    height: 124px;
    width: 270px;
  }
}
`
export const ButtonContainer = styled.div`
display: flex;
flex-direction: row;

@media (max-width: 1024px) {
    margin: 0 auto;
    order: 2;
  }
`

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