import './LoginStyle.css';


function LoginComponent() {

    return (

        <div className="Login container-fluid">
            <nav class="navbar navbar-dark fixed-top transparent-navbar shadow-5-strong">
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