function LoginComponent() {

    return (
        <div className="Login">
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

                <button type="button">Login</button>
            </div>


        </div>

    )

}

export default LoginComponent;