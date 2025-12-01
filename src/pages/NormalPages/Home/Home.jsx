import styles from "./Home.module.css"

import { Link } from "react-router-dom"

function Home() {

    return(
        <div className={styles.container}>
            <h1>home</h1>
            <div>
                <Link to="/BtnCounter"><button style={{ backgroundColor: 'green' }}>BtnCounter</button></Link>
                <Link to="/ToDoNotes"><button style={{ backgroundColor: 'red' }}>To do Notes</button></Link>
                <Link to="/Calculator"><button style={{ backgroundColor: 'red' }}>Calculator</button></Link>
            </div>
        </div>
    )

                
}

export default Home