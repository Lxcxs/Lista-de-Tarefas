<<<<<<< HEAD
import { Button, Container, ContainerUsers, Content, Form, Header, Item, Table, TaskStatus, TaskContainer } from "./styles";
=======
import { Button, Container, ContainerUsers, Content, Form, Header, Item, Table, TaskStatus } from "./styles";
>>>>>>> 643ace191a20bec9f6a3c57a68ac7017bd02191a
import React from 'react'
import axios from 'axios'
import { IoClose } from 'react-icons/io5';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdOutlineAdd } from 'react-icons/md'

interface ITask {
    _id: string;
    task: string;
    done: boolean;
}
<<<<<<< HEAD
=======

>>>>>>> 643ace191a20bec9f6a3c57a68ac7017bd02191a

export default function Dashboard() {

    const [taskList, setTaskList] = React.useState<ITask[]>([])
    const [task, setTask] = React.useState("")
    const form = document.getElementById('user_form')
<<<<<<< HEAD
    const [doneList, setDoneList] = React.useState<any[]>([])
    const localHost = 'http://localhost:7070'
=======
    const [checkedList, setCheckedList] = React.useState<ITask[]>([])
    
    
>>>>>>> 643ace191a20bec9f6a3c57a68ac7017bd02191a
    
    React.useEffect(() => {
      const fetchUsers = async () => {
        const response = await fetch(`${localHost}/tasks`)
        const responseJSON = await response.json()
        const arrTask = taskList.map(item => item).filter(data => data.done === true)
        setTaskList(responseJSON)
<<<<<<< HEAD
        setDoneList(arrTask)
=======
        setCheckedList(arrTask)
       
>>>>>>> 643ace191a20bec9f6a3c57a68ac7017bd02191a
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
<<<<<<< HEAD
        setTask("")
        console.log(taskList)
=======
        setTask("");
        console.log(taskList);
        console.log(checkedList)
>>>>>>> 643ace191a20bec9f6a3c57a68ac7017bd02191a
        
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
<<<<<<< HEAD
                            <input onChange={e => setTask(e.target.value)} className="input" type="text" placeholder="Insira uma tarefa..." />
=======
                            <input onChange={e => setTask(e.target.value)}
                            value={task}
                            className="input" type="text" placeholder="Insira uma tarefa..." />
>>>>>>> 643ace191a20bec9f6a3c57a68ac7017bd02191a
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
<<<<<<< HEAD
                                <TaskContainer key={item._id} stts={item.done}>
=======
                                <div className="user" key={item._id}>
>>>>>>> 643ace191a20bec9f6a3c57a68ac7017bd02191a
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