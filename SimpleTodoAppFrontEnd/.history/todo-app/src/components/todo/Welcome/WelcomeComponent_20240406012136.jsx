import { useParams } from 'react-router-dom';


function WelcomeComponent() {

    const { username } = useParams()


    return (

        <div>
            Manage your todos - <Link to="/todos">Go here</Link>
        </div>

    )
}

export default WelcomeComponent;