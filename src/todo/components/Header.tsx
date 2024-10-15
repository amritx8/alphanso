// components
import { Filter } from './Filter';

// icons
import { IoSearch } from "react-icons/io5";

// contexts
import { useTodoContext } from '../context'

// constants
import { ActionTypes } from '../constants/actionTypes';
import { StatusTypes } from '../constants/statusTypes';
import { ALL, FILTER_OPTIONS } from '../constants/filter';

// types
import type { ReactElement, SyntheticEvent } from 'react';

export const Header = (): ReactElement => {
    const { filterConfig, onAction } = useTodoContext();

    const { searchQuery, status } = filterConfig;

    const handleChange = (event: SyntheticEvent<HTMLInputElement>): void => {
        onAction({
            type: ActionTypes.SEARCH,
            payload: {
                searchQuery: event.currentTarget.value,
            }
        });
    }

    const handleFilterChange = (id: string): void => {
        onAction({
            type: ActionTypes.FILTER,
            payload: {
                status: id === ALL ? undefined : (id as StatusTypes),
            }
        });
    }

    return (
        <div className='flex flex-col gap-4 mb-8 md:flex-row'>
            <div className='flex items-center justify-center w-min h-10 text-2xl font-semibold'>Today</div>
            <div className='flex items-center px-3 gap-2 border border-solid border-slate-300 w-full h-10 rounded-3xl overflow-hidden'>
                <IoSearch size={24} className='fill-slate-400' />
                <input type="text" value={searchQuery} onChange={handleChange} className='h-full w-full border-none outline-none' placeholder='Search' />
            </div>
            <Filter selectedId={status ?? ALL} options={FILTER_OPTIONS} onChange={handleFilterChange} />
        </div>
    )
}