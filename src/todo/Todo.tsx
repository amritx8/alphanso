// components
import { Header } from "./components/Header";
import { List } from './components/List';
import { CreateTask } from "./components/CreateTask";

// icons
import { FaSpinner } from "react-icons/fa";

// contexts
import { useTodoContext } from "./context";

// types
import type { ReactElement } from "react";

export const Todo = (): ReactElement => {
    const { loading } = useTodoContext();
    
    return (
        <div className="h-full w-full p-10">
            <Header />
            {loading ? (
                <div className="h-20 w-full flex items-center justify-center">
                    <FaSpinner size={50} className="fill-black" />
                </div>)
            : <List />}
            <CreateTask />
        </div>
    );
};