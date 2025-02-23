import React from 'react';

class MyComponent extends React.Component{
    state={
        firstName:'',
        lastName:''
    }
    handleClickButton = () =>{
        alert('Finish Click Me')
    }
    handleChangeFirstName =(event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName=(event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit =()=>{
        console.log("--Check data: ", this.state)
        alert('Submit finish')
    }
    render(){
        return(
            <>
                <form>
                    <label htmlFor='fname'>First name </label> <br/>
                    <input type='text' id='fname' value={this.state.firstName} onChange={(event)=> this.handleChangeFirstName(event)}></input><br/>
                    <label htmlFor='lname'>Last name </label> <br/>
                    <input type='text' id='lname' value={this.state.lastName} onChange={(event)=> this.handleChangeLastName(event)}></input><br/>
                    <input type='submit' value='submit' onClick={()=> this.handleSubmit()}></input>
                </form>
            </>
            
        )
        
    }
}

export default MyComponent;