import { useState } from 'react';

import styles from './Button.module.css';

function TodoList() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [value, setValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleAddTask = () => {
        if (value.trim() === "") return; 

        setTasks([...tasks, value]);
        setValue("");
    }
    return (
        <>
            <input value={value} onChange={handleChange} placeholder="Новая задача" />
            <button onClick={handleAddTask} className={styles.btn}>Добавить</button>
            <ul>
                {tasks.map((task, index) => (
                <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    );
}

export default TodoList;