import BtnIcons from "../../../components/Btns/BtnIcons/BtnIcons"
import { Banana, Apple, Grape } from "lucide-react";
import { useState } from "react";
import styles from "./BtnCounter.module.css"

export default function BtnCounter() {

const initialCounts = {
    banana: 0,
    apple: 0,
    grape: 0
};

const [counts, setCounts] = useState(initialCounts);

const handleClick = (fruit) => {
    setCounts(prev => ({
        ...prev,
        [fruit]: prev[fruit] + 1
    }))
}

const handleReset = () => setCounts(initialCounts);

    return (
        <section className={styles.container}>
                <div className={styles.box}>
                    <BtnIcons icon={Banana} bg="#FFEF00" onClick={() => handleClick("banana")} className={styles.btn} iconClassName={styles.icon}></BtnIcons>
                    <p>{counts.banana}</p>
                </div>
                <div className={styles.box}>
                    <BtnIcons icon={Apple} bg="#F2003C" onClick={() => handleClick("apple")} className={styles.btn} iconClassName={styles.icon}></BtnIcons>
                    <p>{counts.apple}</p>
                </div>
                <div className={styles.box}>
                    <BtnIcons icon={Grape} bg="#9966CC" onClick={() => handleClick("grape")} className={styles.btn} iconClassName={styles.icon}></BtnIcons>
                    <p>{counts.grape}</p>
                </div>
            <button onClick={handleReset}>reset</button>
        </section>
    )
}