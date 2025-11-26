import styles from "./Calculator.module.css"
import Footer1 from "../../../components/Footers/Footer1/Footer1"

export default function Calculator() {

    

    return (
        <div className="page">
            <h1>Calculator</h1>
            <div className={styles.container}>
                    <span className={styles.screen}></span>

                    <div className={styles.row}>
                        <button className={styles.btn}>1</button>
                        <button className={styles.btn}>2</button>
                        <button className={styles.btn}>3</button>
                        <button className={styles.btn}>+</button>
                        <button className={styles.btn}>-</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.btn}>4</button>
                        <button className={styles.btn}>5</button>
                        <button className={styles.btn}>6</button>
                        <button className={styles.btn}>*</button>
                        <button className={styles.btn}>/</button>
                    </div>
                    <div className={styles.row}>
                        <button className={styles.btn}>7</button>
                        <button className={styles.btn}>8</button>
                        <button className={styles.btn}>9</button>
                        <button className={styles.btn}>del</button>
                        <button className={styles.btn}>c</button>
            </div>
        </div>
            <Footer1></Footer1>
        </div>   
    )
}
