import {createContext, ReactNode, useEffect, useState} from "react";
import {Task} from "../@types/task";

interface TasksContextType {
    tasks: Task[];
    createNewTask: (newTask: Task) => void;
    toggleTaskStatus: (taskId: string) => void;
    deleteTask: (taskId: string) => void;
}

interface TasksContextProviderProps {
    children: ReactNode
}

export const TasksContext = createContext({} as TasksContextType);

export function TasksContextProvider({ children }: TasksContextProviderProps) {
    const [tasks, setTasks] = useState<Task[]>(loadTasksFromStorage());

    function createNewTask(newTask: Task) {
        setTasks([...tasks, newTask])
    }

    function toggleTaskStatus(taskId: string) {
        setTasks(
            tasks.map((task: Task) => {
                if (task.id === taskId) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            })
        );
    }

    function deleteTask(taskId: string) {
        setTasks(tasks.filter((task:Task) => task.id !== taskId));
    }

    function loadTasksFromStorage() {
        const storedStateAsJSON = localStorage.getItem('@ignite-todo-list:tasks-state-1.0.0');
        return storedStateAsJSON ? JSON.parse(storedStateAsJSON) : [];
    }

    useEffect(() => {
        const stateJSON = JSON.stringify(tasks);
        localStorage.setItem('@ignite-todo-list:tasks-state-1.0.0', stateJSON);
    }, [tasks]);

    return (
        <TasksContext.Provider
            value={{
                tasks,
                createNewTask,
                toggleTaskStatus,
                deleteTask
            }}
        >
            {children}
        </TasksContext.Provider>
    )
}