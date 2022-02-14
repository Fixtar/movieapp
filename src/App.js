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

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
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
      <hr />
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}

      </ul>
    </div>
  );
}

export default App;
