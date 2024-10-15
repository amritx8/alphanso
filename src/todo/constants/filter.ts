// constants
import { StatusTypes } from '../constants/statusTypes';

export const ALL = 'ALL' as const;

export const FILTER_OPTIONS = [
    {
        id: ALL,
        label: 'All',
    },
    {
        id: StatusTypes.COMPLETED,
        label: 'Completed',
    },
    {
        id: StatusTypes.INCOMPLETED,
        label: 'Uncompleted',
    }
];