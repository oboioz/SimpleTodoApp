import { useState } from 'react';
import './LoginStyle.css';


function LoginComponent() {


    const [username, setUsername] = useState('')

    const [password, setPassword] = useState('')

    const [showErrorMessage, setShowErrorMessage] = useState(false)



    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit() {
        if (username === 'admin' && password === 'admin') {
            //setShowErrorMessage(false)
            console.log('Login successful')
        }
        else {
            setShowErrorMessage(true)
        }
    }

    return (

        <div className="Login container-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top transparent-navbar shadow-5-strong px-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Simple!</a>
                </div>
            </nav>
            <div className="row">
                <div className="col gradient-background">
                    <div className="Logo">
                        Simple!
                    </div>
                </div>
                <div className="col">

                    <form className="LoginForm m-5">
                        <h1 class="mb-5">Welcome to Simple!</h1>
                        <div>
                            <label className="form-label">Username</label>
                            <input type="text" name="username" className="form-control" value={username} onChange={handleUsernameChange} />
                        </div>
                        <div>
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" value={password} onChange={handlePasswordChange} />
                        </div>
                        {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}

                        <button type="button" name="login" class="btn btn-primary mt-3" onSubmit={handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default LoginComponent;