import  styled  from "styled-components";

export const SignInContainer = styled.section`
  background-color: #0f172a;
  color: #949686;
  min-height: 100vh;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: center;
`;

export const SignInForm = styled.form`
  background-color: #141e33;
  display: flex;
  width: 400px;
  max-height: 400px;
  padding: 26px 12px;
  margin-top: 20px;
  flex-direction: column;
  border-radius: 16px;
  gap: 8px;

  legend{
    text-align: center;
  }

  legend h1 {
    font-size: 20px;
    color: white;
    text-transform: uppercase;
  }

  label{
    color: white;
    margin-left: 6px;
  }

  input {
    background-color: #1a253a;
    padding: 16px 8px;
    border-radius: 5px;
    color: #949686;
    border: none;
  }

  div {
    display: flex;
    gap: 4px;
  }

  button {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    color: white;
    background-color: #5b21b6;
    padding: 30px auto;
    margin-top: 12px;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #4c1d95;
  }

  @media (max-width: 640px){
      width: 270px;

      legend h1{
        font-size: 18px;
      }

      label {
        font-size: 14px;
      }
  }
`;