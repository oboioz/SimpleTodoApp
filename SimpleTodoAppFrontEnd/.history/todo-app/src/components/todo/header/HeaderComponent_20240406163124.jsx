import { Link } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';
import './HeaderStyle.css';




function HeaderComponent() {

    const authContext = useAuth()

    function logout() {
        authContext.logout()
    }

    return (

        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Todos</a>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default HeaderComponent