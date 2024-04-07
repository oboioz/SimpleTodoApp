import './LoginStyle.css';


function LoginComponent() {

    return (
        <div className="Login container">
            <div className="row justify-content-md-center">
                <div className="col">
                    Image Here
                </div>
                <div className="col">
                    <h1>Login</h1>
                    <div className="LoginForm">
                        <div>
                            <label>User Name</label>
                            <input type="text" name="username" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" name="password" />
                        </div>

                        <button type="button" name="login">Login</button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default LoginComponent;