import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

// const myStyle={
//   backgroundImage: 
// "url('https://images.unsplash.com/photo-1573804613658-6e8bc17661c6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070')",
//   height:'100vh',
// };

function App() {
  return (
    <div className="App" >

      <header className="App-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiHMTPGFHHemjJXCR3j7vl34_twL4bXvefzg&usqp=CAU" className="App-logo" alt="logo" />
        <h1>TODO LIST</h1>
      </header>

      <div className='main'>
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;