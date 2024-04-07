

function ListTodoComponent() {



    const todos = [
        { id: 1, description: 'Learn AWS', done: false, targetDate: targetDate },
        { id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate },
        { id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate },
    ]

    function addNewTodo() {
        console.log('Add New Todo')
    }

    function deleteTodo() {

    }

    function updateTodo() {

    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>



            <div>
                <table className="table">
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
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td> <button className="btn btn-warning"
                                            onClick={() => deleteTodo(todo.id)}>Delete</button> </td>
                                        <td> <button className="btn btn-success"
                                            onClick={() => updateTodo(todo.id)}>Update</button> </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>

                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}

export default ListTodoComponent;