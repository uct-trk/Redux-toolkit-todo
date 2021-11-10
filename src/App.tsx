import { SetStateAction, useState } from 'react';
import { add, remove, toggleCompleted } from './features/todoSlice';
import { useAppDispatch, useAppSelector } from './store';

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => state.todos);

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTitle(e.target.value)
  }
  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  }
  const onDelete = (id: string) => {
    dispatch(remove(id))
  }
  const toggle = (id: string) => {
    dispatch(toggleCompleted(id))
  }

  return (
    <div className="App">
     <input type="text" value={title} onChange={handleChange} />
     <button onClick={onSave}>Kaydet</button>
     <ul>
       {todos.map(todo => <li key={todo.id}>
         <button onClick={() => toggle(todo.id)}>
           {todo.completed ? "Tamamlandı" : "Tamamla"}
         </button>
        <button onClick={() => onDelete(todo.id)}>Sil</button>
        <span> {todo.title}</span>
       </li>)}
     </ul>
    </div>
  );
}

export default App;
