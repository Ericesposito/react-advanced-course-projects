import Todos from './components/Todos';

const items: string[] = ['Learn React', 'Learn TypeScript'];

function App() {
  return (
    <div className="App">
      <Todos items={items} />
    </div>
  );
}

export default App;
