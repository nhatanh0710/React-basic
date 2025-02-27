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
        ],
        editToDo: {}
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
    handleDeleteToDo = (todo) => {
        let currentListToDo = this.state.listTodos;
        currentListToDo = currentListToDo.filter(item=> item.id != todo.id);
        this.setState({
            listTodos: currentListToDo
        })
    }
    handlEditToDo = (todo) => {
        let {editToDo, listTodos} = this.state;
        let isEmptyObj =Object.keys(editToDo).length===0;

        //save
        if (isEmptyObj === false && editToDo.id == todo.id){
            let listToDosCopy = [...listTodos];
            let objIndex = listToDosCopy.findIndex((item => item.id == todo.id));
            listToDosCopy[objIndex].title=editToDo.title;
            this.setState({
                listTodos: listToDosCopy,
                editToDo: {}
            })
            toast.success("Edit success")
            return;
        }
        //edit
        this.setState({
            editToDo: todo
        })
    }
    handleOnChangeEditToDo = (event) => {
        let editToDoCopy = {...this.state.editToDo};
        editToDoCopy.title=event.target.value;
        this.setState({
            editToDo: editToDoCopy
        })
    }
    render(){
        let {listTodos,editToDo} =this.state;
        //let listTodos - this.state.listTodos;
        let isEmptyObj =Object.keys(editToDo).length ===0;
        return(
            <div className='list-todo-container'>
                <p>
                    Simple TODO Apps with React.js
                </p>
                <AddToDo addNewToDo={this.addNewToDo}/>
                <div className="list-todo-context">
                    {listTodos && listTodos.length>0 && 
                        listTodos.map((item,index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj == true ? 
                                        <span>{index +1} - {item.title}</span>
                                        :
                                        <>
                                        {editToDo.id === item.id ? 
                                            <span>
                                                {index + 1} - <input value={editToDo.title} 
                                                onChange={(event) => this.handleOnChangeEditToDo(event)}></input>
                                            </span>
                                            :
                                            <span>{index +1} - {item.title}</span>
                                        }
                                        </>
                                        
                                    }
                                    
                                    <button className='edit' onClick={()=> this.handlEditToDo(item)}>
                                        {isEmptyObj === false && editToDo.id === item.id ? "Save" : "Edit"}
                                    </button>
                                    <button className='delete' onClick={()=>this.handleDeleteToDo(item)}>Delete</button>
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