import React from 'react';
import TaskList from './TasksList';

const TodoList = () => {
    return (
        <div>
            <h1 className="title">Todo List</h1>
            <TaskList />
        </div>
    );
};

export default TodoList;