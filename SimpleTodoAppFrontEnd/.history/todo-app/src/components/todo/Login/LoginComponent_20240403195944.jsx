import './LoginStyle.css';


function LoginComponent() {

    return (
        <div className="Login container">
            <div className="row align-items-center">
                <div className="col image">
                    <img
                        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                        alt="new"
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