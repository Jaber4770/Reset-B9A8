import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h1>Opps!</h1>            
            <p>The page you request is not found.</p>
            <Link to='/'>Go back</Link>
        </div>
    );
};

export default ErrorPage;