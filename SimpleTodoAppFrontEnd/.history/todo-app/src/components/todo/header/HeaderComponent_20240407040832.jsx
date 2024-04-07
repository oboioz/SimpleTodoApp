import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';
import './HeaderStyle.css';




function HeaderComponent() {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated
    const { username } = useParams()

    function logout() {
        authContext.logout()
    }

    return (

        <nav class="navbar fixed-top navbar-expand-lg bg-opacity-0">
            <div class="container-fluid">
                <a class="navbar-brand logo" href="#">SIMPLE!</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {isAuthenticated
                                && <Link className="nav-link" to="/welcome/${username}">Home</Link>}
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/todos">Todo List</Link>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-primary" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-dark" to="/logout" onClick={logout}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default HeaderComponent