// components
import { Todo } from './todo';

// hooks
import { useTodoActions } from './todo/hooks/useTodoActions';

// contexts
import { TodoContextProvider } from './todo/context';

// types
import type { ReactElement } from 'react';

export const App = (): ReactElement => {
    const { loading, isCreating, tasks, filterConfig,  onAction } = useTodoActions();

  return (
    <div className="h-full w-full">
        <TodoContextProvider value={{ loading, isCreating, tasks, filterConfig, onAction }}>
            <Todo />
        </TodoContextProvider>
    </div>
  );
}