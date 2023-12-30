import  styled  from "styled-components";

export const CreateTaskContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const CreateTaskCard = styled.div`
  min-width: 456px;
  min-height: 95vh;
  padding: 12px;
  border-radius: 9px;
  background-color: #141e33;
  display: flex;
  align-items: center;
  margin: 0 auto;

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;
  }

  form legend h1 {
    font-size: 20px;
  }

  form input {
    background-color: #1a253a;
    padding: 16px 8px;
    border-radius: 5px;
    color: #949686;
  }

  form div {
    display: flex;
    gap: 4px;
  }

  button {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    color: white;
    background-color: #5b21b6;
    margin: 30px auto;
    transition: all 0.3s;
  }

  button:hover {
    background-color: #4c1d95;
  }

  @media (max-width: 640px){
    min-width: 270px;
    min-height: 70vh;
    padding: 12px;

      form{
        width: 270px;
        gap: 28px;
      }

      form legend h1{
        font-size: 18px;
      }

      form label {
        font-size: 14px;
      }
  }
`;
