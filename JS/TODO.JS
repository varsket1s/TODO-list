"use strict"
/*
 TODO darba aprasancio objekto savybes
 - description
 - created_on
 - deadline
 - status: todo, inprogress, done

 */

 let todo_list = [
     {description: 'Pasigaminti kavos',
     created_on: '2020.05.13 15:15',
     deadline: '2020.05.14 15:15',
     status: 'todo'},

    {description: 'Padaryt namu darbus',
     created_on: '2020.05.13 15:16',
     deadline: '2020.05.14 15:17',
     status: 'todo'},

    {description: 'Pavalgyti',
    created_on: '2020.05.13 15:18',
    deadline: '2020.05.14 15:19',
    status: 'todo'}
];
  /*  
['Pasigaminti kavos' , '2020.05.13 15:15' , '2020.05.14 15:15' , 'todo'],
['Padaryt namu darbus' , '2020.05.12 17:12' , '2020.05.17 10:05' , 'todo'],
['Pavalgyti' , '2020.05.13 18:15' , '2020.05.14 19:15' , 'todo'] */



 const obj = {
     description: 'Pasigaminti kavos',
     created_on: '2020.05.13 15:15',
     deadline: '2020.05.14 15:15',
     status: 'todo'
 }
/*
 console.log (todo_list);
 console.log(obj);
 console.log('obj: description:' , obj['description']);
 console.log('obj: created_on:' , obj['created_on']);
 console.log('obj: deadline:' , obj['deadline']);
 console.log('obj: status:' , obj['status']);

 */
for (let i=0; i<todo_list.length; i++) {
    const todo = todo_list[i];
    const sentence= `Darbas kuri reikia padaryti yra "${todo.description}" ji padaryti reikia iki "${todo.deadline}" darbas siuo metu yra busenoje "${todo.status}".`
    console.log(sentence);
}

const people = [
{name:"petras",
age: 66
},

{name:"jaronimas",
age: 43
},
{name:"jonas",
age: 25
}
]
/*
for (let i=0; i<people.length; i++) {;
const person = people[i];
console.log(person);

console.log(`${person.name} year till death: ${90 - person.age } `);
}

*/