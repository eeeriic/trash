import "./Home.css"

import { Link } from "react-router-dom"

function Home() {

    return(
        <div className="container">
            <h1>home</h1>
            <Link to="/BtnCounter"><button>BtnCounter</button></Link>
            <Link to="/Calculator"><button>Calculator</button></Link>
        </div>
    )

                
}

export default Home