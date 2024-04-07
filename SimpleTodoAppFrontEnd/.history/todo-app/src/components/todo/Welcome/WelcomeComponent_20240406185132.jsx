import { Link, useParams } from 'react-router-dom';
import './WelcomeStyle.css';


function WelcomeComponent() {

    const { username } = useParams()


    return (
        <div className="WelcomeComponent d-flex justify-content-center align-items-center">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>

    )
}

export default WelcomeComponent;