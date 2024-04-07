import LoginComponent from "./todo/Login/LoginComponent";

export default function TodoApp() {
    return (
        <div className="todo-app">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} />

                    <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                            <WelcomeComponent />
                        </AuthenticatedRoute>
                    } />
                </div>
                )
}