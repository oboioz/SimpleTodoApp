import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from "./todo/Login/LoginComponent";
import WelcomeComponent from "./todo/Welcome/WelcomeComponent";
import ErrorComponent from "./todo/error/ErrorComponent";
import ListTodoComponent from './todo/list-todo/ListTodoComponent';

export default function TodoApp() {
    return (
        <div className="todo-app">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome/:username' element={<WelcomeComponent />} />
                    <Route path='/todos' element={<ListTodoComponent />} />

                    <Route path='*' element={<ErrorComponent />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}