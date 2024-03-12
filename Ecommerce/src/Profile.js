import React from 'react';
import { useAuth } from './AuthContext';

const Profile = () => {
  const { authToken, onLogout } = useAuth();

  if (!authToken) {
    return <div>You need to log in</div>;
  }

  return (
    <div>
      <div>Profile</div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Profile;
