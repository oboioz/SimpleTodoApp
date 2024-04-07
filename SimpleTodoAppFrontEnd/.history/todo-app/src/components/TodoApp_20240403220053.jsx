import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from "./todo/Login/LoginComponent";
import WelcomeComponent from "./todo/Welcome/WelcomeComponent";

export default function TodoApp() {
    return (
        <div className="todo-app">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />
                    <Route path='/welcome' element={<WelcomeComponent />} />

                </Routes>
            </BrowserRouter>
        </div>
    )
}