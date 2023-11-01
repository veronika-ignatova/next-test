import React, {useEffect, useState} from 'react';
import LUser from "./LUser";

function LUsers() {
    const [lusers, setLUsers] = useState([]);
    const [luser, setLUser] = useState(null);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setLUsers(value))
    }, []);

    const getUserId = (id) => {
        fetch('http://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setLUser(value))
    }

    return (
        <div>
            <div>{lusers.map(user => <LUser user={user} getUserId={getUserId}/>)}</div>
            <div>{luser && <div>{luser?.id}</div>}</div>
        </div>
    );
}

export default LUsers;