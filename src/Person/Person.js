import React from 'react';


const Person = (props) => {
    return( 
        <div> 
            <p>I'm A Person!! my name is {props.name} i am {props.age} years old and i like {props.hobby} </p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
}
export default Person;