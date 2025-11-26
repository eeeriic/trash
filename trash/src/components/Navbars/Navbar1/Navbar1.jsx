import styles from "./Navbar1.module.css"
import { Link } from "react-router-dom"

export default function Navbar( {title} ) {

    return (
        <div className={styles.nav}>
            <Link to="/" className={styles.title}>
                <h1>{title}</h1>
            </Link>
        </div>
    )
}