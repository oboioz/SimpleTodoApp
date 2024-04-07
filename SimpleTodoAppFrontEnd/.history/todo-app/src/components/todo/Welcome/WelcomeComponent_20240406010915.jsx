import { useParams } from 'react-router-dom';


function WelcomeComponent() {

    const { username } = useParams()


    return (

        <div className="Welcome">
            Welcome to SIMPLE!, {username}!
        </div>

    )
}

export default WelcomeComponent;