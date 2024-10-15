// icons
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

// contexts
import { useTodoContext } from '../context'

// constants
import { ActionTypes } from "../constants/actionTypes";
import { StatusTypes } from "../constants/statusTypes";

// types
import type { ReactElement } from "react"
import type { Task } from "../types";


type Props = {
    item: Task,
}

export const ListItem = (props: Props): ReactElement => {
    const { item } = props;
    const { id, description, status } = item;

    const isSelected = status === StatusTypes.COMPLETED;

    const { onAction } = useTodoContext();

    const toggleCompleted = () => {
        onAction({
            type: ActionTypes.TOGGLE_COMPLETED,
            payload: {
                task: item,
            }
        });
    }

    const deleteItem = () => {
        onAction({
            type: ActionTypes.DELETE,
            payload: {
                id
            }
        });
    }

    return (
        <div className={`w-full h-10 px-3 flex items-center justify-between gap-4 border border-solid rounded-lg ${isSelected ? 'bg-green-100 border-green-600' : 'border-slate-300'}`}>
            <div className="flex items-center gap-4" style={{ width: 'calc(100% - 36px)' }}>
                <button onClick={toggleCompleted}>
                    {isSelected ? <FaRegCheckCircle size={20} className='fill-green-600' /> : <FaRegCircle size={20} />}
                </button>
                <div className="truncate">{description}</div>
            </div>
            <button onClick={deleteItem}>
                <IoClose size={20} />
            </button>
        </div>
    )
}