import logo from './logo.svg';
import './App.css';
import MyComponent from './views/Example/MyComponent';
import ListTodo from './views/Todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";
import Nav from './views/Nav/Nav.js';
import Home from './views/Example/Home.js';
import ListUser from './Users/ListUser';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav></Nav>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} exact>
            
          </Route>
          <Route path="/todos" element={<ListTodo />}>
           
          </Route>
          <Route path="/about" element={<MyComponent />}>
          <Route path="/user">
              <ListUser />
            </Route>
          </Route>
        </Routes>
        

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
    </BrowserRouter>
  );
}

export default App;
