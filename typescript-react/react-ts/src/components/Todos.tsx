import React, { PropsWithChildren } from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';

type TodosProps = {
  items: Todo[];
};

const Todos: React.FC<PropsWithChildren<TodosProps>> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
