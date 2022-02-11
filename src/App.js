import { useState } from 'react';
import './App.css';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    setToDos(currentArray => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>MY ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange}
          value={toDo}
          type="text"
          placeholder='할일을 등록하세요' />
        <button>추가</button>
      </form>
    </div>
  );
}

export default App;
