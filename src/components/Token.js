import React, { useState } from 'react'
import axios from 'axios';

export default function Token() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [displayMsg, setDisplayMsg] = useState('');
    const [ownerMailOfToken, setOnwerMailOfToken] = useState('');

    function validateToken() {
        axios.get('validateToken', {
            headers: {
                authorization: `bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setDisplayMsg('Token is Valid');
                const { email } = JSON.parse(atob(token.split('.')[1]));
                console.log(email);
                setOnwerMailOfToken(email);
            })
            .catch((err) => {
                console.log(err);
                setDisplayMsg('Token is not Valid');
                setOnwerMailOfToken('');
            })
    }
    return (
        <>
            <h2>Validate Token</h2>
            <br />
            <textarea cols="30" rows="10" value={token} onChange={(e) => {
                setToken(e.target.value);
                console.log(e.target.value);
            }} ></textarea>
            <br />
            <button onClick={() => {
                validateToken();
            }}>Validate Token</button>
            <p>NOTE: Prefilled Token is of last logged in user - {ownerMailOfToken}</p>
            <h3>{displayMsg}</h3>
            { }
        </>
    )
}
