import { useNavigate, useParams } from 'react-router-dom';
import './WelcomeStyle.css';


function WelcomeComponent() {

    const { username } = useParams()

    let navigate = useNavigate();
    const gotoList = () => {
        let path = `todos`;
        navigate(path);
    }


    return (
        <div className="WelcomeComponent d-flex justify-content-center align-items-center flex-column">
            <h1>Welcome to Simple Todo App, {username}!</h1>
            <a href="#link" class="btn btn-info btn-lg" role="button">Link Button</a>

        </div>

    )
}

export default WelcomeComponent;