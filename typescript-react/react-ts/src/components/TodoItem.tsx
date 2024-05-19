import React, { PropsWithChildren } from 'react';

type TodoProps = {
  text: string;
};

const TodoItem: React.FC<PropsWithChildren<TodoProps>> = (props) => {
  return <li>{props.text}</li>;
};
export default TodoItem;
