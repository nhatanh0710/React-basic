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
        console.log('>>>check props: ', this.props)
            let name = this.props.name;
            let age = this.props.age;
            // let {name,age} = this.props;
        return(
            
            <>
                <div>
                    ChildComponent: {name} - {age}
                </div>
            </>
            
        )
        
    }
}

export default ChildComponent;