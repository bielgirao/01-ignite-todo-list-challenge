import {HomeContainer} from "./styles.ts";
import {TaskInput} from "./components/TaskInput";
import {TasksList} from "./components/TasksList";
import {TasksContextProvider} from "../../contexts/TasksContext.tsx";

export function Home() {
    return (
        <TasksContextProvider>
            <HomeContainer>
                <TaskInput />
                <TasksList />
            </HomeContainer>
        </TasksContextProvider>
    );
}
