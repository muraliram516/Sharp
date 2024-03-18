import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChangePassword = async () => {
        try {
            const idToken = localStorage.getItem('idToken'); // Assuming the token is stored in localStorage
            if (!idToken) {
                setError('User is not logged in.');
                return;
            }

            const response = await axios.post('/api/change-password', {
                idToken,
                newPassword: password,
                returnSecureToken: true
            });

            if (response.status === 200) {
                setSuccess('Password changed successfully.');
                setPassword(''); // Clear the password field
            } else {
                setError('Failed to change password.');
            }
        } catch (err) {
            setError(err.response ? err.response.data.error.message : err.message);
        }
    };

    return (
        <div>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
            />
            <button onClick={handleChangePassword}>Change Password</button>
        </div>
    );
};

export default ChangePassword;
