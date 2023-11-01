import './App.css';
import React, {useState} from 'react';
import LUsers from "./components/Les2User/LUsers";
import RepeatedUsers from "./components/RepeatUserFrom2/RepeatedUsers";
// import Simpson from "./components/Simpson/Simpson";
// import {useEffect, useState} from "react";
// import User from "./components/User";
// import Simpsons from "./components/Simpsons/Simpsons";
//
// export default function App() {
//
//     let [usersList, setUsersList] = useState([]);
//
//     const [greeting, setGreeting] = useState("hello");
//
//     useEffect(() => {
//         fetch('http://jsonplaceholder.typicode.com/users')
//             .then(response => response.json())
//             .then(users => {
//                 setUsersList(users);
//             });
//     }, []);
//
//     const adder = () => {
//         setGreeting(greeting + "!");
//     }
//
//     return (
//         <div className="App">
//             <Simpson name="Homer" pic="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"/>
//             <Simpson name="Lisa" pic="https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"/>
//             <Simpson name="Marge" pic="https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"/>
//
//             {usersList.map(value => <User id={value.id} name={value.name}/>)}
//             <Simpsons/>
//             <button onClick={adder}>Click</button>
//             {greeting}
//         </div>
//     );
// }

function App(props) {

    // const [name, setName] = useState('default');
    // const [age, setAge] = useState(1);


    // const nameHandler = (e) => {
    //     setName(e.target.value);
    //     console.log(e.target.value);
    // }
    //
    // const ageHandler = (e) => {
    //     setAge(e.target.value);
    //     console.log(e.target.value);
    // }


    const [form, setForm] = useState({name: 'default', age: 1});
    const send = (e) => {
        e.preventDefault()
        console.log(form);
    }

    const formHandler = (e) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    return (
        <div>
            {/*<LUsers />*/}
            {/*<RepeatedUsers />*/}
            <form onSubmit={send}>
                <div><label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                </div>
                <div><label>Age: <input type="number" name={'age'} value={form.age} onChange={formHandler}/></label>
                </div>
                <button>Send</button>
            </form>
        </div>
    );
}

export default App;