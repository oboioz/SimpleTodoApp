import './LoginStyle.css';


function LoginComponent() {

    return (
        <div className="Login container">
            <div className="row">
                <div className="col image">
                    Image Here
                </div>
                <div className="col form">
                    <h1>Login</h1>
                    <form className="LoginForm">
                        <div>
                            <label className="form-label">Username</label>
                            <input type="text" name="username" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Password</label>
                            <input type="password" name="password" />
                        </div>

                        <button type="button" name="login">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default LoginComponent;