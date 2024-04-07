import './LoginStyle.css';


function LoginComponent() {

    return (

        <div className="Login container-fluid">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/todos">Todos</a></li>
                </ul>
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
                            <input type="text" name="username" className="form-control" />
                        </div>
                        <div>
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" />
                        </div>

                        <button type="button" name="login" class="btn btn-primary mt-3">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default LoginComponent;