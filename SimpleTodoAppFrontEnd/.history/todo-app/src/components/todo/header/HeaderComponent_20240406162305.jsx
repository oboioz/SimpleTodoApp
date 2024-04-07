import { Link } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';
import './HeaderStyle.css';




function HeaderComponent() {

    const authContext = useAuth()

    function logout() {
        authContext.logout()
    }

    return (

        <header>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg transparent-navbar">
                        <a className="navbar-brand ms-2 fs-2 fw-bold logo " href="#">SIMPLE</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Home</Link>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/todos">Todos</Link>
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
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default HeaderComponent