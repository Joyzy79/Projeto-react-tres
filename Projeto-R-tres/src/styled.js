import styled from 'styled-components'
import { FcFullTrash, FcCheckmark } from "react-icons/fc"
export const Container = styled.div`
    background:linear-gradient(90deg, #746474 0%, #24762387 81.25%);
    width:100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const ToDoList = styled.div`
background: #fff;
padding: 30px 20px;
border-radius: 5px;

ul{
    padding: 0;
    margin-top: 60px;
}
`
export const Input = styled.input`
border: 2px solid rgba(209 ,211, 212, 04);
border-radius: 5px;
height: 40px;
margin-right: 40px;
width: 340px;
`
export const Button = styled.button`
background: #9999EC;
border-radius: 5px;
color: #fff;
font-size: 16px;
font-weight: 900;
line-height: 2px;
height: 40px;
border: none;
width: 130px;
cursor: pointer;
`
export const ListItem = styled.div`
background: ${ props => props.isFinished ?'#77679C':'rgb(209 ,601, 195, 04)'} ;
box-shadow: 1px 4px 10px  rgba(0, 0, 0, 0.2);
border-radius: 5px;
height: 60px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0 20px;
width: 500px;

li{
    list-style: none;
}
`

export const Trash = styled(FcFullTrash)`
cursor: pointer;
`
export const Check = styled(FcCheckmark)`
cursor: pointer;
`



