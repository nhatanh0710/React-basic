import React from 'react';

class MyComponent extends React.Component{
    state={
        name: 'Ronaldo',
        channel: 'Hoi Dan It'
    }
    render(){
        return(
            <>
                <div className="first"> 
                    Hello MyComponent, My name is {this.state.name}
                </div>
                <div className='second'>Hello Nguyen Truong Nhat Anh</div>
                
            </>
            
        )
        
    }
}

export default MyComponent;