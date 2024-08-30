import {Task} from "../../../../@types/task";
import {EmptyCheckmark, FilledCheckmark, TaskCardContainer, TaskContent, TrashIcon} from "./styles.ts";
import { Circle, CheckCircle, Trash } from 'phosphor-react';
import {useContext} from "react";
import {TasksContext} from "../../../../contexts/TasksContext.tsx";

interface TaskCardProps {
    task: Task
}

export function TaskCard({task}: TaskCardProps) {
    const { toggleTaskStatus, deleteTask } = useContext(TasksContext);

    function handleToggleTaskStatus() {
        toggleTaskStatus(task.id)
    }

    function handleDeleteTask() {
        deleteTask(task.id)
    }

    return (
        <TaskCardContainer>
            { !task.completed ?  (
                <EmptyCheckmark type="button" onClick={handleToggleTaskStatus}>
                    <Circle size={18} />
                </EmptyCheckmark>
            ) : (
                <FilledCheckmark type="button" onClick={handleToggleTaskStatus}>
                    <CheckCircle size={18} weight="fill"/>
                </FilledCheckmark>
            )}
            <TaskContent $isCompleted={task.completed}>{task.task}</TaskContent>
            <TrashIcon type="button" onClick={handleDeleteTask}>
                <Trash size={18}/>
            </TrashIcon>
        </TaskCardContainer>
    );
}
