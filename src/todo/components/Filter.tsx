// types
import type { ReactElement } from 'react';

type FilterOption = {
    id: string;
    label: string;
}

type Props = {
    selectedId: string;
    options: FilterOption[];
    onChange: (id: string) => void;
}

export const Filter = (props: Props): ReactElement => {
    const { selectedId, options, onChange } = props;

    return (
        <div className='flex gap-4'>
            {options.map(({id, label}) => (
                <button
                    key={id}
                    onClick={() => onChange(id)}
                    className={`px-3 h-10 rounded text-white ${selectedId === id ? 'bg-green-600' : 'bg-neutral-400'}`}
                >{label}</button>
            ))}
        </div>
    );
}