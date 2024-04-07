function LoginComponent() {

    return (
        <div className="Login">
            <h1>Login</h1>
            <div className="LoginForm">
                <label>User Name</label>
                <input type="text" name="username" />
                Password: <input type="password" name="password" />
                <button>Login</button>
            </div>


        </div>

    )

}

export default LoginComponent;