import React, { PropsWithChildren } from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './Todos.module.css';

type TodosProps = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

const Todos: React.FC<PropsWithChildren<TodosProps>> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={() => props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
