import React from "react";
import './ListToDo.scss';
import AddToDo from "./AddToDo";
import { toast } from 'react-toastify';
class ListTodo extends React.Component{
    state={
        listTodos: [
            {id: 'todo1', title: 'Doing Homework'},
            {id: 'todo2', title: 'Making videos '},
            {id: 'todo3', title: 'Fixing bugs'},
        ]
    }
    addNewToDo = (todo) =>{
        //let currentListToDo = this.state.listToDos;
        //currentListToDo.push(todo);
        this.setState({
            listTodos: [...this.state.listTodos,todo]
            //listToDos: currentListToDo
        })
        toast.success("Wow so easy!")
    }
    render(){
        let {listTodos} =this.state;
        //let listTodos - this.state.listTodos;
        return(
            <div className='list-todo-container'>
                <AddToDo addNewToDo={this.addNewToDo}/>
                <div className="list-todo-context">
                    {listTodos && listTodos.length>0 && 
                        listTodos.map((item,index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                <span>{index +1} - {item.title}</span>
                                <button className='edit'>Edit</button>
                                <button className='delete'>Delete</button>
                    </div>
                            )
                        })
                    } 
                    

                </div>
            </div>  
        )
    }
}

export default ListTodo;