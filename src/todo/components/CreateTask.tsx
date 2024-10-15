// libraries
import { useState } from "react";

// icons
import { FaSpinner } from "react-icons/fa";

// contexts
import { useTodoContext } from "../context";

// constants
import { ActionTypes } from "../constants/actionTypes";

// types
import type { ReactElement } from "react";

export const CreateTask = (): ReactElement => {
    const [value, setValue] = useState<string>('');
    
    const { isCreating, onAction } = useTodoContext();

    const addTask = () => {
       if(value) {
            onAction({
                type: ActionTypes.ADD,
                payload: {
                    description: value,
                }
            });

            setValue('');
       }
    }

    return (
        <div className="flex flex-col gap-4">
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.currentTarget.value)}
                className="w-full h-10 px-3 border border-solid border-slate-300 outline-none rounded-lg"
                placeholder="Type Something"
            />
            <button
                className="w-full h-10 flex items-center justify-center bg-black text-white rounded-lg"
                onClick={addTask}
            >{isCreating ? <FaSpinner size={20} /> : 'Add Task'}</button>
        </div>
    )
} 