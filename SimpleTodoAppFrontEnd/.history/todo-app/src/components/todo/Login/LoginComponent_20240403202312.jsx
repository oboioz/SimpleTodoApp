import './LoginStyle.css';


function LoginComponent() {

    return (
        <div className="Login container">
            <div className="row align-items-center">
                <div className="col">
                    <img
                        src="https://images.unsplash.com/photo-1536662788222-6927ce05daea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="display"
                        className="img-fluid object-fit-cover"
                    />
                </div>
                <div className="col">

                    <form className="LoginForm">
                        <h1 class="mb-5">Login</h1>
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