import { ClipboardText } from "phosphor-react";

import {NoTaskMessageContainer} from "./styles.ts";

export function NoTaskMessage() {
    return (
        <NoTaskMessageContainer>
            <ClipboardText size={50} />
            <p><b>You don't have tasks registered yet</b></p>
            <p>Create tasks and organize your to-do items</p>
        </NoTaskMessageContainer>
    );
}
