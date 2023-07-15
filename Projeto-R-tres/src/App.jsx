import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
uuidv4()

import { Container, ToDoList, Input, Button, ListItem, Check, Trash } from './styled'  

function App() {
    const [list, setList] = useState([])
    const [inputTask, setInputTask] = useState('')

    function inputChange(event) {
        setInputTask(event.target.value)

} 
function buttonClick() {
    setList([...list, { id: uuidv4(), task: inputTask, finished: false }])
}

function finishTask(id) {
    console.log(id)
    const newList = list.map((item) => (
        item.id === id ? { ...item, finished: ! item.finished } : item   
    ))
    setList(newList)
}

    function deleteTask(id) {
        const newList = list.filter((item) => item.id !== id)

        setList(newList)
    }

    return(
        <Container>
            <ToDoList>
            <Input onChange={inputChange} placeholder="Oque vamos fazer... " />
                <Button  onClick ={buttonClick}>Adicionar</Button>
                    <ul>
                        {
                        list.length > 0 ? (
                        list.map((item) => (
                            <ListItem isFinished ={item.finished}key={item.id}>
                                <Check onClick={()=>finishTask(item.id)} />
                                <li>{item.task}</li>
                                <Trash onClick={ () => deleteTask(item.id)}/>
                            </ListItem> 
                        ))
                        ) : ( <h3>Não há mais taréfas!</h3> )
                        }
                    </ul>
            </ToDoList>
        </Container>
)
}                       


export default App
