import React from 'react';

class MyComponent extends React.Component{
    state={
        name: 'Ronaldo',
        channel: 'Hoi Dan It'
    }
    handleClickButton = () =>{
        alert('Finish Click Me')
    }
    handleOnChangeName =(event) => {
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return(
            <>
                <div className="first"> 
                   <input value={this.state.name} type="text" onChange={(event)=> this.handleOnChangeName(event)}></input>
                    My name is {this.state.name}
                </div>
                <div className='second'>Hello Nguyen Truong Nhat Anh</div>
                <div className='third'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
            
        )
        
    }
}

export default MyComponent;