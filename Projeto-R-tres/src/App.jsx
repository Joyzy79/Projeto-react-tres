import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
uuidv4();

import { container } from './styled'  

function App() {
    const [list, setList] = useState([{ id: uuidv4(), task: 'Tarefa 1' }]);
    const [inputTask, setInputTask] = useState('')

    function inputChange(event) {
        setInputTask(event.target.value)

} 
function buttonClick() {
    setList([...list, { id: uuidv4(), task: inputTask }])
}

    return(
        <container>
            <input onChange={inputChange} placeholder="Tarefa" />
                <button onClick ={buttonClick}>Adicionar</button>
                    <ul>
                        {list.map((item) => (
                            <li key={item.id}>{item.task}</li>
                        ))}
                    </ul>
        </container>
)
}                       


export default App
