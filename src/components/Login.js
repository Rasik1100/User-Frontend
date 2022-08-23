import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {
    const [errorList, setErrorList] = useState([]);
    const [isLoggedIn, setLogginStatus] = useState(0);


    function handleSubmit({ email, password }) {
        axios.post('login', {
            email,
            password
        })
            .then((res) => {
                console.log(res)
                localStorage.setItem('token', res.data.jwtToken)
                if (res.status === 200) {
                    setLogginStatus(1);
                }
            })
            .catch((e) => {
                console.log('...', e);
                setLogginStatus(e.response.data.response);
                const error = e.response.data.response.split(' ')[0] || 'Error Occured';
                setErrorList([error]);
            })
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({ email: e.target[0].value, password: e.target[1].value });
            }}>
                <label >E-Mail : </label>
                <input type="text" className={errorList.includes('Email') ? 'hasError' : ''} required autoComplete='off' />
                <br />
                <label >Password : </label>
                <input type="password" className={errorList.includes('Password') ? 'hasError' : ''} required />
                <br />
                <button type='submit'>Login</button>
            </form>
            <br />
            {isLoggedIn === 1 && <div style={{ color: 'green', fontSize: '40px' }}>
                User is Logged in Successfully
            </div>}
            {typeof (isLoggedIn) === 'string' && <div style={{ color: 'red', fontSize: '40px' }}>
                {isLoggedIn}
            </div>}
        </div>
    )
}
