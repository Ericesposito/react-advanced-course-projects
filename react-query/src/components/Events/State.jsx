import React, { useState } from 'react';

function ExampleComponent() {
  const [title, setTitle] = useState('Initial Title');

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setTitle('Updated Title')}>Change Title</button>
    </div>
  );
}
const [count, setCount] = useState(0);

// Increment count by 1
setCount((prevCount) => prevCount + 1);

const [userInput, setUserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
});

const titleChangeHandler = (event) => {
  setUserInput({
    ...userInput,
    enteredTitle: event.target.value,
  });
};

console.log(titleChangeHandler);
