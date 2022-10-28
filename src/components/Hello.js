import React from "react";

const Hello =() =>{
    //below is with using jsx
        // return (
        //     <div classNmae='dummyClass'>
        //         <h1>Hello Sylvester</h1>
        //     </div>
        // )
        //below is without using jsx

        return React.createElement(
            'div',
            {id: 'hello', className: 'dummyClass'},
            React.createElement('h1', null, 'Hello Sylvester')
        )
}

export default Hello;