import { useState } from 'react';

function Todo() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();

    if (todo === '') {
      return;
    }

    setTodo('');
    setTodos((currentArray) => [todo, ...currentArray]);
  };

  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type='text'
          placeholder='Write your to do...'
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default Todo;
