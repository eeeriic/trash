import styles from "./Navbar1.module.css"
import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <div className={styles.nav}>
            <Link to="/">
                <button>back home nav</button>
            </Link>
        </div>
    )
}