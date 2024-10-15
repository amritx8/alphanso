// libraries
import { useState, useCallback } from "react";

// constants
import { API_KEY } from "../constants/apiKey";

// types
import type { Task } from "../types";

type Return = {
    addTask: (task: Task) => void;
    updateTask: (task: Task) => void;
    deleteTask: (id: string) => void;
    isCreating: boolean;
    isUpdating: boolean;
    isDeleting: boolean;
}

const getCurrentTasks = (): Task[] => {
    const currentData = localStorage.getItem(API_KEY);
    localStorage.removeItem(API_KEY);

    return currentData ? JSON.parse(currentData) : [];
}

export const useTodoMutation = (): Return => {
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const addTask = useCallback((task: Task): void => {
        setIsCreating(true);

        setTimeout(() => {
            const tasks = getCurrentTasks();
            const data = JSON.stringify([...tasks, task]);

            localStorage.setItem(API_KEY, data);
            setIsCreating(false);
        }, 200);
    }, []);

    const updateTask = useCallback((updatedTask: Task): void => {
        setIsUpdating(true);

        setTimeout(() => {
            const tasks = getCurrentTasks();
            const data = JSON.stringify(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));

            localStorage.setItem(API_KEY, data);
            setIsUpdating(false);
        }, 200);
    }, []);

    const deleteTask = useCallback((id: string): void => {
        setIsDeleting(true);

        setTimeout(() => {
            const tasks = getCurrentTasks();
            const data = JSON.stringify(tasks.filter(task => task.id !== id));

            localStorage.setItem(API_KEY, data);
            setIsDeleting(false);
        }, 200);
    }, []);

    return {
        addTask,
        updateTask,
        deleteTask,
        isCreating,
        isUpdating,
        isDeleting,
    }
}