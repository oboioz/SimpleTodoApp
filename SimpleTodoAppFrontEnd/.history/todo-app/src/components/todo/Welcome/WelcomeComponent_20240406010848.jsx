import { useParams, Link } from 'react-router-dom'


function WelcomeComponent() {

    const { username } = useParams()


    return (

        <div className="Welcome">
            Welcome to SIMPLE!
        </div>

    )
}

export default WelcomeComponent;