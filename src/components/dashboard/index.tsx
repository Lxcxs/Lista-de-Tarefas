import { Button, Container, ContainerUsers, Content, Form, Header, Item, Table, TaskStatus, TaskContainer } from "./styles";
import React from 'react'
import axios from 'axios'
import { IoClose } from 'react-icons/io5';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdOutlineAdd } from 'react-icons/md'

interface ITask {
    _id: string;
    task: string;
    done: boolean;
}

export default function Dashboard() {

    const [taskList, setTaskList] = React.useState<ITask[]>([])
    const [task, setTask] = React.useState("")
    const form = document.getElementById('user_form')
    const [doneList, setDoneList] = React.useState<any[]>([])
    const localHost = 'http://localhost:7070'
    
    React.useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch(`${localHost}/tasks`)
        const responseJSON = await response.json()
        const arrTask = taskList.map(item => item).filter(data => data.done === true)
        setTaskList(responseJSON)
        setDoneList(arrTask)
      }
      fetchUsers()
    }, [taskList])

    
    function preventForm(e: any) {
        e.preventDefault()
    }
    form?.addEventListener('submit', preventForm)

    async function addTask() {

        try {
            await axios.post(`${localHost}/tasks`, {
                task: task,
                done: false
            })

        } catch (error) {
            console.error('Ocorreu um erro:', error)
        }
        setTask("")
        console.log(taskList)
        
    }

    async function removeTask(id: string) {
        try {
            taskList.forEach(async (item) => {
                if (item._id === id) {
                    await axios.delete(`${localHost}/tasks/${id}`)
                }
            })

        } catch (error) {
            console.error('Ocorreu um erro: ', error)
        }
    }

    async function checkTask(id: string, isDone: boolean) {
        try {
            if (isDone) {
                await axios.patch(`${localHost}/tasks/${id}`, {
                    done: false
                })
            } else {
                await axios.patch(`${localHost}/tasks/${id}`, {
                    done: true
                })
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
                    <Form>
                        <div className="col01">
                            <input onChange={e => setTask(e.target.value)} className="input" type="text" placeholder="Insira uma tarefa..." />
                        </div>

                        <Button type="submit" onClick={addTask}>
                            <MdOutlineAdd size={25} />
                        </Button>
                    </Form>

                    <TaskStatus>
                            <p>Concluídas: {doneList.length}</p>
                        
                            <p>Tarefas: {taskList.length}</p>
                    </TaskStatus>

                    <ContainerUsers stts={false}>



                        {
                            taskList.map((item) => (
                                <TaskContainer key={item._id} stts={item.done}>
                                    <div className="checkButton" onClick={() => checkTask(item._id, item.done)}>
                                        {item.done ? <MdCheckBox size={25} color="#38ff59" /> : <MdCheckBoxOutlineBlank size={25} />}
                                    

                                    
                                        <Item stts={item.done}> {item.task} </Item>
                                    </div>

                                    <div className="removeButton" onClick={() => removeTask(item._id)}>
                                        <IoClose size={25} />
                                    </div>

                                </TaskContainer>
                            ))
                        }
                    </ContainerUsers>


                </Table>

            </Content>
        </Container>
    )
}