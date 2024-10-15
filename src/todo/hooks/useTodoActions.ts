// libraries
import { useState, useCallback } from 'react';
import { v4 } from 'uuid';

// hooks
import { useTodoQuery } from './useTodoQuery';
import { useTodoMutation } from './useTodoMutation';

// constants
import { ActionTypes } from '../constants/actionTypes';
import { StatusTypes } from '../constants/statusTypes';

// types
import type { FilterConfig, Task, OnAction } from '../types'

type Return = {
    loading: boolean,
    isCreating: boolean;
    tasks: Task[];
    filterConfig: FilterConfig,
    onAction: OnAction
}

const getToggledStatus = (status: StatusTypes): StatusTypes => {
    if(status === StatusTypes.COMPLETED) {
        return StatusTypes.INCOMPLETED;
    }

    return StatusTypes.COMPLETED;
}

export const useTodoActions = (): Return => {
    const [filterConfig, setFilterConfig] = useState<FilterConfig>({
        searchQuery: '',
    });

    const { tasks, loading, refetch } = useTodoQuery();
    const { addTask, updateTask, deleteTask, isCreating, isUpdating, isDeleting } = useTodoMutation();

    const handleAction = useCallback<OnAction>((action) => {
        const { type } = action;

        switch(type) {
            case ActionTypes.ADD: {
                const { payload } = action;
                const { description } = payload;

                addTask({ id: v4(), description, status: StatusTypes.INCOMPLETED });
                refetch();
                break;
            }
            case ActionTypes.TOGGLE_COMPLETED: {
                const { payload } = action;
                const { task } = payload;

                updateTask({ ...task, status: getToggledStatus(task.status) });
                refetch();

                break;
            }
            case ActionTypes.DELETE: {
                const { payload } = action;
                const { id } = payload;
                
                deleteTask(id);
                refetch();
                break;
            }
            case ActionTypes.FILTER: {
                const { payload } = action;
                const { status } = payload;
                
                setFilterConfig(prevState => ({
                    ...prevState,
                    status
                }));
                break;
            }
            case ActionTypes.SEARCH: {
                const { payload } = action;
                const { searchQuery } = payload;

                setFilterConfig(prevState => ({
                    ...prevState,
                    searchQuery,
                }));
                break;
            }
            default: {
                break;
            }
        }
    }, [addTask, updateTask, deleteTask, refetch]);

    const filteredTasks = tasks.filter(({ status, description }) => 
        (!filterConfig.status || filterConfig.status === status) && description.includes(filterConfig.searchQuery)
    );    

    return {
        loading: loading || isUpdating || isDeleting,
        isCreating,
        tasks: filteredTasks,
        filterConfig,
        onAction: handleAction,
    }
}