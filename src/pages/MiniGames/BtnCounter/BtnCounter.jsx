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
                    <button onClick={() => handleClick("banana")}>
                        <Banana />
                    </button>
                    <p>{counts.banana}</p>
                </div>
                <div className={styles.box}>
                    <button onClick={() => handleClick("apple")}>
                        <Apple />
                    </button>
                    <p>{counts.apple}</p>
                </div>
                <div className={styles.box}>
                    <button onClick={() => handleClick("grape")}>
                        <Grape />
                    </button>
                    <p>{counts.grape}</p>
                </div>
            <button onClick={handleReset}>reset</button>
        </section>
    )
}