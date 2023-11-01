import React from 'react';

function RepeatedUser({user, getUserId}) {
    return (
        <div>
            <li>My user with name: {user.name} and Id: {user.id} </li>
            <button onClick={() => getUserId(user.id)}>Click me!</button>
        </div>
    );
}

export default RepeatedUser;