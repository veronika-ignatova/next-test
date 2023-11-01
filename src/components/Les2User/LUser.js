import React from 'react';

function LUser({user:{id}, getUserId}) {
    // let {id, getUserId} = props;
    return (
        <div>
            User with id {id}
            <button onClick={() => getUserId(id)}>Click</button>
        </div>
    );
}
export default LUser;