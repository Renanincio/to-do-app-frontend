import  styled  from "styled-components";

export const TaskCard = styled.div`
  min-width: 256px;
  min-height: 256px;
  padding: 12px;
  border-radius: 9px;
  background-color: #5b21b6;
`;

export const TaskCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;

  border-bottom: dashed 2px #949686;
`;

export const TaskCardText = styled.div`
  h1 {
    font-size: 16px;
    color: white;
  }

  p {
    font-size: 14px;
  }
`;

export const TaskCardDate = styled.div`
  margin-bottom: 12px;
  font-size: 14px;
`;

export const TaskCardIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CompletedCard = styled.div`
  background-color: white;
  color: green;
  padding: 10px 35px;
  margin-top: 12px;
  border-radius: 12px;
  font-size: 12px;
`;

export const UncompletedCard = styled.div`
  background-color: red;
  color: white;
  padding: 10px 35px;
  margin-top: 12px;
  border-radius: 12px;
  font-size: 12px;
`;

export const CardOptions = styled.ul`
  display: flex;
  margin-top: 12px;
  font-size: 20px;
  gap: 7px;

  .cardLink {
    color: #949686;
  }

  button {
    background-color: transparent;
    color: #949686;
    font-size: 20px;
  }

  li:hover {
    color: white;
  }

  .yellow {
    color: yellow;
  }
`;
