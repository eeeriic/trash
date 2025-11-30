import { Link } from "react-router-dom"

function Error() {
    return (
        <div>
            <h1>page not found</h1>
            <Link to={"/"}>
            <button>Go back Home</button>
            </Link>
        </div>
    )
}

export default Error