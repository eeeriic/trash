import BtnIcons from "../../../components/Btns/BtnIcons/BtnIcons"
import { Banana, Apple, Grape } from "lucide-react";
import { useState } from "react";
import styles from "./BtnCounter.module.css"
import Footer1 from "../../../components/Footers/Footer1/Footer1";

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
        <div className="page">
            <h1>Btn Counter</h1>
            <div className={styles.container}>
                <div className={styles.box}>
                    <BtnIcons icon={Banana} bg="#FFEF00" onClick={() => handleClick("banana")}></BtnIcons>
                    <p>{counts.banana}</p>
                </div>
                <div className={styles.box}>
                    <BtnIcons icon={Apple} bg="#F2003C" onClick={() => handleClick("apple")}></BtnIcons>
                    <p>{counts.apple}</p>
                </div>
                <div className={styles.box}>
                    <BtnIcons icon={Grape} bg="#9966CC" onClick={() => handleClick("grape")}></BtnIcons>
                    <p>{counts.grape}</p>
                </div>
                
            </div>

            <button onClick={handleReset}>reset</button>
            <Footer1></Footer1>
        </div>
    )
}