import styles from "./ToDoNotes.module.css"
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
        <section className={styles.container}>
                <div className={styles.box}>
                    <div className={styles.inpField}>
                        <input type="text" className={styles.inp} value={text} onChange={e => setText(e.target.value)} onKeyDown={e => {if (e.key === "Enter") {addTask()}}}/>
                        <button onClick={addTask}>
                            <Check />
                        </button>
                    </div>
                    <div className={styles.taskField}>
                        <ul className={styles.list}>
                            {tasks.map(task => (
                                <li key={task.id} className={styles.listli}>
                                    <span className={styles.taskText}>{task.text}</span> <button onClick={() => removeTask(task.id)}><Trash2 /></button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </section>
    )
}