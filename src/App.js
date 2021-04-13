import './App.css';
import { DeleteButton } from './DeleteButton';
import {Table} from './Table.js';

function App() {
  return (
    <div className="App">
      <h1>Таблица пользователей</h1>
      <Table />
      <DeleteButton />
    </div>
  );
}

export default App;
