import React from 'react';


const Character = props => {
    const {person} = props
    console.log(person)
    return (
        <div>
            <p>
                {person.name}
            </p>
        </div>
    )
}

export default Character