import BtnIcons from "../../../components/Btns/BtnIcons/BtnIcons"
import { Banana, Apple, Grape } from "lucide-react";
import { useState } from "react";
import styles from "./BtnCounter.module.css"
import Footer1 from "../../../components/Footers/Footer1/Footer1";
import Navbar1 from "../../../components/Navbars/Navbar1/Navbar1";

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
            <Navbar1 title="Btn Counter"></Navbar1>
            <div className={styles.container}>
                <div className={styles.box}>
                    <BtnIcons icon={Banana} bg="#FFEF00" onClick={() => handleClick("banana")} className={styles.btn}></BtnIcons>
                    <p>{counts.banana}</p>
                </div>
                <div className={styles.box}>
                    <BtnIcons icon={Apple} bg="#F2003C" onClick={() => handleClick("apple")} className={styles.btn}></BtnIcons>
                    <p>{counts.apple}</p>
                </div>
                <div className={styles.box}>
                    <BtnIcons icon={Grape} bg="#9966CC" onClick={() => handleClick("grape")} className={styles.btn}></BtnIcons>
                    <p>{counts.grape}</p>
                </div>
                
            </div>

            <button onClick={handleReset}>reset</button>
            <Footer1></Footer1>
        </div>
    )
}