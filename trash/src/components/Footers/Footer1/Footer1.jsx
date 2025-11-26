import { Link } from "react-router-dom"
import styles from "./Footer1.module.css"

export default function Footer1() {

    return (
        <div className={styles.footer}>
            <Link to="/">
                <button>back home</button>
            </Link>
        </div>
    )
}