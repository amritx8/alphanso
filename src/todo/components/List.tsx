// components
import { ListItem } from './ListItem';

// contexts
import { useTodoContext } from '../context'

// types
import type { ReactElement } from "react"

export const List = (): ReactElement | null => {
    const { tasks } = useTodoContext();

    return tasks.length ? (
        <div className='flex flex-col gap-4 mb-4'>
            {tasks.map(task => <ListItem key={task.id} item={task} />)}
        </div>
    ) : null
}