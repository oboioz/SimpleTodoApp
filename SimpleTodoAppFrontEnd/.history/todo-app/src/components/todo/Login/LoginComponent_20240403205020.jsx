import './LoginStyle.css';


function LoginComponent() {

    return (

        <div className="Login container-fluid">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <!-- Container wrapper -->
                <div class="container-fluid">
                    <!-- Navbar brand -->
                    <a class="navbar-brand" href="#">Brand</a>

                    <!-- Toggle button -->
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>

                    <!-- Collapsible wrapper -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <!-- Left links -->
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <!-- Navbar dropdown -->
                            <li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <!-- Dropdown menu -->
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a class="dropdown-item" href="#">Action</a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
                                >Disabled</a
                                >
                            </li>
                        </ul>
                        <!-- Left links -->
                    </div>
                    <!-- Collapsible wrapper -->
                </div>
                <!-- Container wrapper -->
            </nav>
            <!-- Navbar -->
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