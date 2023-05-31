// Code Keypad Component Here
import React from 'react';


function Keypad (){
    return (
        <div>
            <form onChange={()=>{console.log('Entering password...')}}>
                 <input type="password" name="password" placeholder="Enter password..." />
            </form> 
        </div>
    )
}

export default Keypad;