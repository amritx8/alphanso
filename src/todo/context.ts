// libraries
import { createContext, useContext } from 'react'

// types
import type { Task, FilterConfig, OnAction } from './types';

type ContextValue = {
    loading: boolean;
    isCreating: boolean;
    tasks: Task[],
    filterConfig: FilterConfig,
    onAction: OnAction,
}

const TodoContext = createContext<ContextValue>({
    loading: false,
    isCreating: false,
    tasks: [],
    filterConfig: {
        searchQuery: '',
    },
    onAction: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => useContext(TodoContext);
