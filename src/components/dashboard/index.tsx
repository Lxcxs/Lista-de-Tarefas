import { InspectOptions } from "util";
import { Button, Container, ContainerUsers, Content, Form, Header, Item, Table, TaskStatus } from "./styles";
import React, { useRef } from 'react'
import axios from 'axios'
import { IoClose } from 'react-icons/io5';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdOutlineAdd } from 'react-icons/md'


export default function Dashboard() {

    const [taskList, setTaskList] = React.useState<any[]>([])
    const [task, setTask] = React.useState("")
    const [checked, setChecked] = React.useState(0)
    const form = document.getElementById('user_form')
    const [checkedList, setCheckedList] = React.useState<any[]>([])
    
    const taskRef = useRef<any>(null);
    
    React.useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch('http://localhost:7070/tasks')
        const responseJSON = await response.json()
        const arrTask = taskList.map(item => item).filter(data => data.done === true)
        setTaskList(responseJSON)
        setCheckedList(arrTask)
      }
      fetchUsers()
    }, [taskList])

    
    function preventForm(e: any) {
        e.preventDefault()
    }
    form?.addEventListener('submit', preventForm)

    async function addTask() {
        setTask(taskRef.current.value)

        try {
            await axios.post('http://localhost:7070/tasks', {
                task: task,
                done: false
            })

        } catch (error) {
            console.error('Ocorreu um erro:', error)
        }
        
    }

    async function removeTask(id: string) {
        try {
            taskList.forEach(async (item) => {
                if (item._id === id) {
                    await axios.delete(`http://localhost:7070/tasks/${id}`)
                }
            })
            setChecked(checked - 1)

        } catch (error) {
            console.error('Ocorreu um erro: ', error)
        }
    }

    async function checkTask(id: string, isDone: boolean) {
        try {
            if (isDone) {
                await axios.patch(`http://localhost:7070/tasks/${id}`, {
                    done: false
                })
                setChecked(checked - 1)
            } else {
                await axios.patch(`http://localhost:7070/tasks/${id}`, {
                    done: true
                })
                setChecked(checked + 1)
            }


        } catch (error) {
            console.error('Ocorreu um erro: ', error)
        }
    }

    return(
        <Container>
            <Content>

                <Table>
                    <Header>
                        <h1>Lista de Tarefas</h1>
                    </Header>
                    <Form id="user_form">
                        <div className="col01">
                            <input ref={taskRef} className="input" type="text" placeholder="Insira uma tarefa..." />
                        </div>

                        <Button type="submit" onClick={addTask}>
                            <MdOutlineAdd size={25} />
                        </Button>
                    </Form>

                    <TaskStatus>
                            <p>Concluídas: {checkedList.length}</p>
                        
                            <p>Tarefas: {taskList.length}</p>
                    </TaskStatus>

                    <ContainerUsers stts={false}>



                        {
                            taskList.map((item) => (
                                <div className="user">
                                    <div className="checkButton" onClick={() => checkTask(item._id, item.done)}>
                                        {item.done ? <MdCheckBox size={25} color="#38ff59" /> : <MdCheckBoxOutlineBlank size={25} />}
                                    

                                    
                                        <Item stts={item.done}> {item.task} </Item>
                                    </div>

                                    <div className="removeButton" onClick={() => removeTask(item._id)}>
                                        <IoClose size={25} />
                                    </div>

                                </div>
                            ))
                        }
                    </ContainerUsers>


                </Table>

            </Content>
        </Container>
    )
}