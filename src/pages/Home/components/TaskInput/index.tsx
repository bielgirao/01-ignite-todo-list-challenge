import {TaskInputContainer} from "./styles.ts";
import {PlusCircle} from 'phosphor-react';
import {useContext, useState} from "react";
import {Task} from "../../../../@types/task";
import {TasksContext} from "../../../../contexts/TasksContext.tsx";

export function TaskInput() {
    const [taskContent, setTaskContent] = useState<string>('');
    const { createNewTask } = useContext(TasksContext)

    function handleCreateTask() {
        const newTask: Task = {
            id: String(new Date().getTime()),
            task: taskContent,
            completed: false
        }
        createNewTask(newTask);
        setTaskContent('');
    }

    return (
        <TaskInputContainer>
            <input
                name={taskContent}
                value={taskContent}
                placeholder="Add a new task"
                onChange={(event) => setTaskContent(event.target.value)}
            />
            <button onClick={handleCreateTask} disabled={!taskContent}>
                Create
                <PlusCircle size={16} />
            </button>
        </TaskInputContainer>
    );
}
