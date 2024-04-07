import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginComponent from "./todo/Login/LoginComponent";
import WelcomeComponent from "./todo/Welcome/WelcomeComponent";
import ErrorComponent from "./todo/error/ErrorComponent";
import HeaderComponent from './todo/header/HeaderComponent';
import OptionalHeader from './todo/header/OptionalHeader';
import ListTodoComponent from './todo/list-todo/ListTodoComponent';
import LogoutComponent from './todo/logout/LogOutComponent';
import AuthProvider, { useAuth } from './todo/security/AuthContext';

export default function TodoApp() {

    function AuthenticatedRoute({ children }) {
        const authContext = useAuth()

        if (authContext.isAuthenticated)
            return children

        return <Navigate to="/" />
    }


    return (
        <div className="todo-app">


            <AuthProvider>


                <BrowserRouter>

                    <OptionalHeader>
                        <HeaderComponent />
                    </OptionalHeader>


                    <Routes>
                        <Route path='/' element={<LoginComponent />} />
                        <Route path='/login' element={<LoginComponent />} />
                        <Route path='/welcome/:username' element={<WelcomeComponent />} />
                        <Route path='/todos' element={<ListTodoComponent />} />
                        <Route path='/logout' element={<LogoutComponent />} />


                        <Route path='*' element={<ErrorComponent />} />

                    </Routes>

                    {/* <OptionalFooter>
                        <FooterComponent />
                    </OptionalFooter> */}


                </BrowserRouter>
            </AuthProvider>


        </div>
    )
}

