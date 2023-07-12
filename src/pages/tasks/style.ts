import { styled } from 'styled-components';

export const TasksContainer = styled.div`
min-height: 100vh;
padding: 24px 32px;
width: 80%;
`

export const HeaderTasks = styled.header`
width: 100%;

input {
    height: 50px;
    border-radius: 24px;
    padding: 12px;
    width: 450px;
    background-color: #141E33;
    color: white;
}
`

export const TasksCards = styled.div`
width: 900px;
display: flex;
flex-wrap: wrap;
margin-top: 200px;
gap: 32px;
`

export const AddTaskCard = styled.button`
min-width: 256px;
min-height: 256px;
padding: 12px;
border-radius: 9px;
background-color: transparent;
border: dashed 2px #949686;
text-align: center;
color: #949686;
text-transform: capitalize;
font-size: 18px;
`