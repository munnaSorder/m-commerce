import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Profile = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <div>
            <img src={user.photoURL} alt=""/>
            <h1>{user.name}</h1>
        </div>
    );
};

export default Profile;