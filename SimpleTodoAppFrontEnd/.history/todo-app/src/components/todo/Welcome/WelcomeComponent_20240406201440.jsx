import { Navigate, useNavigate, useParams } from 'react-router-dom';
import './WelcomeStyle.css';


function WelcomeComponent() {

    const { username } = useParams()

    let navigate = useNavigate();
    const gotoList = () => {
        let path = `/todos`;
        navigate(path);
    }


    async function gotoList() {
        Navigate('/todos')
    }


    return (
        <div className="WelcomeComponent d-flex justify-content-center align-items-center flex-column">
            <h1>Welcome to Simple Todo App, {username}!</h1>
            <button type="button" name="CTA" class="btn btn-primary mt-3 btn-lg" onClick={gotoList()}>Manage Your Todo!</button>
        </div>

    )
}

export default WelcomeComponent;