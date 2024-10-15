// types
import { ActionTypes } from "./constants/actionTypes";
import type { StatusTypes } from "./constants/statusTypes";

export type FilterConfig = {
    searchQuery: string;
    status?: StatusTypes;
}

export type Task = {
    id: string;
    description: string;
    status: StatusTypes;
}

type AddAction = {
    type: ActionTypes.ADD,
    payload: {
        description: string;
    }
}

type ToggleCompletedAction = {
    type: ActionTypes.TOGGLE_COMPLETED,
    payload: {
        task: Task;
    }
}

type DeleteAction = {
    type: ActionTypes.DELETE,
    payload: {
        id: string;
    }
}

type FilterAction = {
    type: ActionTypes.FILTER,
    payload: {
        status?: StatusTypes;
    }
}

type SearchAction = {
    type: ActionTypes.SEARCH,
    payload: {
        searchQuery: string;
    }
}

export type OnAction = (action: AddAction | ToggleCompletedAction | DeleteAction | FilterAction | SearchAction) => void;