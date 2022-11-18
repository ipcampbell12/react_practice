import React from 'react';
import Person from './Person';

// //rendering contents of an array
// function NameList(props) {

//     const names = ['Bruce', 'Clark', 'Diana']
//     const nameList = names.map(name => <h2>{name}</h2>)

//     //need to reuse curly braces for inner javascript function (name parameter)
//     return (
//         <div>
//             {nameList}
//         </div>
//     );
// }

// export default NameList;


function NameList(props) {

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Marty',
            age: 31,
            skill: 'Python'
        },
        {
            id: 3,
            name: 'Pamela',
            age: 32,
            skill: 'Basket weaving'
        },
        {
            id: 4,
            name: 'Donovan',
            age: 33,
            skill: 'Dandling babies'
        }
    ]

    const personList = persons.map(person => <Person person={person} />)

    return (
        <div>
            {personList}
        </div>
    );
}

export default NameList;