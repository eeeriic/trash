import Footer1 from "../../../components/Footers/Footer1/Footer1"
import Navbar1 from "../../../components/Navbars/Navbar1/Navbar1"
import styles from "./ToDoNotes.module.css"
import BtnIcons from "../../../components/Btns/BtnIcons/BtnIcons"
import { Check, Trash2 } from 'lucide-react';
import { useState } from "react";

export default function ToDoNotes() {

    const [text, setText] = useState("")
    const [tasks, setTasks] = useState([])

    function addTask() {
        if (text.trim() === "") return;
        setTasks(prev => [...prev, { id: Date.now(), text }]);
        setText("")
    }

    function removeTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    return (
        <section className="page">
            <Navbar1 title="To Do"></Navbar1>
            <div className={styles.container}>
                <div className={styles.inpField}>
                    <input type="text" className={styles.inp} value={text} onChange={e => setText(e.target.value)} onKeyDown={e => {if (e.key === "Enter") {addTask()}}}/>
                    <BtnIcons icon={Check} iconClassName={styles.checkIcon} onClick={addTask}></BtnIcons>
                </div>
                <div className={styles.taskField}>
                    <ul className={styles.list}>
                        {tasks.map(task => (
                            <li key={task.id} className={styles.listli}>
                                <span className={styles.taskText}>{task.text}</span> <BtnIcons icon={Trash2} iconClassName={styles.trashIcon} onClick={() => removeTask(task.id)}></BtnIcons>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer1></Footer1>
        </section>
    )
}