import { Link, useRouteError } from "react-router-dom"
import Wrapper from "../assets/wrappers/ErrorPage"
import img from '../assets/not-found.svg'

const Error = () => {
    const error = useRouteError()
    console.log(error);

    if (error.status === 404) {
        return <Wrapper>
            <div>
                <img src={img} alt="not found" />
                <h3>Ohh!</h3>
                <p>We did not find the page you are looking for</p>
                <Link to='/'>back to home page</Link>
            </div>
        </Wrapper>
    }

    return (
        <div>
            <h3>another error</h3>
        </div>
    )
}

export default Error