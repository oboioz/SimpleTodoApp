import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LoginComponent from "./todo/Login/LoginComponent";
import WelcomeComponent from "./todo/Welcome/WelcomeComponent";
import ErrorComponent from "./todo/error/ErrorComponent";
import FooterComponent from './todo/footer/FooterComponent';
import HeaderComponent from './todo/header/HeaderComponent';
import ListTodoComponent from './todo/list-todo/ListTodoComponent';
import LogoutComponent from './todo/logout/LogOutComponent';
import AuthProvider from './todo/security/AuthContext';

export default function TodoApp() {
    const location = useLocation();
    const showHeader = () => {

        return location.pathname !== '/login';
    }



    return (
        <div className="todo-app">


            <AuthProvider>


                <BrowserRouter>
                    {showHeader() && <HeaderComponent />}
                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={<WelcomeComponent />} />
                        <Route path='/todos' element={<ListTodoComponent />} />
                        <Route path='/logout' element={<LogoutComponent />} />


                        <Route path='*' element={<ErrorComponent />} />

                    </Routes>
                    <FooterComponent />
                </BrowserRouter>
            </AuthProvider>


        </div>
    )
}