import React, {useEffect, useState} from 'react';

import RepeatedUser from "./RepeatedUser";
import {userService} from "../../services/user.service";

function RepeatedUsers() {

    const [repUsers, setRepUsers] = useState([]);
    const [repUser, setRepUser] = useState(null);

    useEffect(() => {
        userService.getAll()
            .then(user => setRepUsers(user))
    }, []);

    const getUserId = (id) => {
        userService.getById(id)
            .then(user => setRepUser(user))
    }

    return (
        <div>
            {
                repUser && <div>This is user with id {repUser.id} and name {repUser.name}</div>
            }
            {
                repUsers.map(user => <RepeatedUser user={user} getUserId={getUserId}/>)
            }
        </div>
    );
}

export default RepeatedUsers;