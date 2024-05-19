import React, { ReactNode } from 'react';

type TodosProps = {
  children?: ReactNode;
  items: string[];
};

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.children}
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
