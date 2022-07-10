import { Button, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react'

function AdminHome() {
    const initInputs = { password: "", username: "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(() => ({
            ...inputs,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/api/admin', {
            method: 'POST',
            body: JSON.stringify(inputs)
        })
        .then(res => {
            console.log(res)
        })
        
    }

    return (
        <div style={{ margin: '20px', padding: '10px' }}>
            <div style={{ padding: "10px" }}>
                <InputLabel htmlFor='username'>
                    Username
                </InputLabel>
                <Input onChange={handleChange} name='username' />
            </div>

            <div style={{ padding: "10px" }}>
                <InputLabel htmlFor='password'>
                    Password
                </InputLabel>
                <Input onChange={handleChange} name='password' /><br />
            </div>

            <Button style={{ margin: '10px' }} onClick={handleSubmit} color="primary" variant="contained">Submit</Button>
        </div>
    );
}

export default AdminHome;