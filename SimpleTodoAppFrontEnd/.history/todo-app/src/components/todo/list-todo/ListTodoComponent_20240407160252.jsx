import React, { useEffect, useState } from 'react';
import './ListTodoStyle.css';
import { retrieveAllTodosForUsernameApi } from '../api/ApiTodo';

function ListTodoComponent() {

    const today = new Date()
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())

    const username = authContext.username

    const [todos, setTodos] = useState([])

    useEffect(() => refreshTodos(), [])

    function refreshTodos() {

        retrieveAllTodosForUsernameApi(username)
            .then(response => {
                setTodos(response.data)
            }

            )
            .catch(error => console.log(error))

    }


    // const todos = [
    //     { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
    //     { id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate },
    //     { id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate },
    // ]

    function addNewTodo() {
        console.log('Add New Todo')
    }

    function deleteTodo() {

    }

    function updateTodo() {

    }

    return (
        <div className="ListTodo container-fluid p-5">
            <h1 className='mt-5'>Things You Want To Do!</h1>



            <div className='p-5'>
                <table className="table table-dark table-hover table-bordered table_custom">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td> <button className="btn btn-outline-warning"
                                            onClick={() => deleteTodo(todo.id)}>Delete</button> </td>
                                        <td> <button className="btn btn-outline-primary"
                                            onClick={() => updateTodo(todo.id)}>Update</button> </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>

                </table>
            </div>
            <div className="btn btn-primary m-1 btn-lg" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}

export default ListTodoComponent;