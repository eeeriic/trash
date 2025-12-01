import styles from "./Navbar1.module.css"
import { Link } from "react-router-dom"
import { useTheme } from "../../Theme/ThemeContext"
import { Sun, Moon } from "lucide-react"

export default function Navbar() {

    const { toggleTheme, theme } = useTheme();

    return (
        <div className={styles.nav}>
            <Link to="/">
                <button>back home nav</button>
            </Link>
            <button onClick={toggleTheme} className={styles.btn}>
                {theme === "light" ? 
                    <Moon />
                    : 
                    <Sun />
                }
            </button>
        </div>
    )
}