import {useContext} from "react";

import {Badge, TasksListContainer, TasksListHeader, TasksListHeaderItem, TasksListWrapper} from "./styles.ts";
import {Task} from "../../../../@types/task";
import {TaskCard} from "../TaskCard";
import {TasksContext} from "../../../../contexts/TasksContext.tsx";
import {NoTaskMessage} from "../NoTaskMessage";

export function TasksList() {
    const { tasks } = useContext(TasksContext);

    const completedTasks = tasks.filter(task => task.completed).length;
    const orderedTasks = tasks.sort((a, b) => Number(a.completed) - Number(b.completed))

    return (
        <TasksListWrapper>
            <TasksListHeader>
                <TasksListHeaderItem>
                    <span>Tasks Created</span>
                    <Badge>{tasks.length}</Badge>
                </TasksListHeaderItem>
                <TasksListHeaderItem>
                    <span>Completed</span>
                    <Badge>{completedTasks} {tasks.length > 0 && (
                        <>
                            of {tasks.length}
                        </>
                    )}
                    </Badge>
                </TasksListHeaderItem>
            </TasksListHeader>
            <TasksListContainer>
                {orderedTasks.length > 0 ? (
                    orderedTasks.map((task: Task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                ) : (
                    <NoTaskMessage />
                )}
            </TasksListContainer>
        </TasksListWrapper>
    );
}