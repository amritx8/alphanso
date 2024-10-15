// libraries
import { useEffect, useState } from "react";

// constants
import { API_KEY } from "../constants/apiKey";

// types
import type { Task } from "../types";

export const useTodoQuery = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const data = localStorage.getItem(API_KEY);
            setTasks(data ? JSON.parse(data) : []);
            setLoading(false);
        }, 200);
    }, [loading]);

    const refetch = () => {
        setLoading(true);
    }

    return {
        tasks,
        loading,
        refetch,
    }
}