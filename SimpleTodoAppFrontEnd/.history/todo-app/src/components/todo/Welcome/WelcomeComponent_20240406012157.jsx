import { useParams, Link } from 'react-router-dom';


function WelcomeComponent() {

    const { username } = useParams()


    return (
        <h1>Welcome {username}</h1>
        <div>
            Manage your todos - <Link to="/todos">Go here</Link>
        </div>

    )
}

export default WelcomeComponent;