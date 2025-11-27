import Footer1 from "../../../components/Footers/Footer1/Footer1"
import Navbar1 from "../../../components/Navbars/Navbar1/Navbar1"
import styles from "./ToDoNotes.module.css"
import BtnIcons from "../../../components/Btns/BtnIcons/BtnIcons"

export default function ToDoNotes() {

    return (
        <section className="page">
            <Navbar1 title="To Do"></Navbar1>
            <div className={styles.container}>
                <div className={styles.inpField}>
                    <input type="text" className={styles.inp}/>
                </div>
                <div>

                </div>
            </div>
            <Footer1></Footer1>
        </section>
    )
}