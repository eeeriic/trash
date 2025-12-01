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
                    <button onClick={() => handleClick("banana")} className={styles.btn} style={{ backgroundColor: "yellow" }}>
                        <Banana className={styles.icon}/>
                    </button>
                    <p>{counts.banana}</p>
                </div>
                <div className={styles.box}>
                    <button onClick={() => handleClick("apple")} className={styles.btn} style={{ backgroundColor: "red" }}>
                        <Apple className={styles.icon}/>
                    </button>
                    <p>{counts.apple}</p>
                </div>
                <div className={styles.box}>
                    <button onClick={() => handleClick("grape")} className={styles.btn} style={{ backgroundColor: "purple" }}>
                        <Grape className={styles.icon}/>
                    </button>
                    <p>{counts.grape}</p>
                </div>
            <button onClick={handleReset}>reset</button>
        </section>
    )
}