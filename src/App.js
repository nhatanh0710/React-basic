import logo from './logo.svg';
import './App.css';
import MyComponent from './views/Example/MyComponent';
import ListTodo from './views/Todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO Apps with React.js
        </p>
        
        {/*<MyComponent/>*/}
        <ListTodo></ListTodo>
      </header>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
    </div>
  );
}

export default App;
