import React from 'react';

class ChildComponent extends React.Component{
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
                <div>
                    ChildComponent: {this.props.name}
                </div>
            </>
            
        )
        
    }
}

export default ChildComponent;