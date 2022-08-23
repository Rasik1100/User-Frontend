import axios from 'axios';
import React, { useState } from 'react'

export default function SignUp() {
    const [msg, setMsg] = useState('');

    function handleSubmit({ name, email, password }) {
        axios.post('signUp', {
            name, password, email
        })
            .then((res) => {
                if (res.status === 200) {
                    setMsg(res.data.response);
                }
            })
            .catch((e) => {
                console.log('........', e.response.data.response);
                setMsg(e.response.data.response);
            })

    }


    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(e);
                handleSubmit({ name: e.target[0].value, email: e.target[1].value, password: e.target[2].value })
            }}>
                <label>Name : </label>
                <input type="text" required />
                <br />
                <label >E-mail : </label>
                <input type="text" required autoComplete='off' />
                <br />
                <label >Password : </label>
                <input type="password" required />
                <br />
                <button type='submit'>Sign Up </button>
            </form>
            <h1>
                {msg}
            </h1></div>
    )
}
