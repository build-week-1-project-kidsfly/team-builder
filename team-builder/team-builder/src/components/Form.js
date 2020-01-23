import React, { useState } from 'react';

const Form = () => {
    const [newMember, setNewMember] = useState({
        name: "",
        role: "",
        email: ""
    });

    const onInputChange = event => {
        setNewMember({
            ...newMember, [event.target.name]: event.target.value
        })
    };
    const onInputSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='hello'>
            <form onSubmit={onInputSubmit}>
                <label>
                    Name: <input name='name' value={newMember.name} onChange={onInputChange} type='text' />
                </label>
                <br/>
                <label>
                    Role:
                    <select name='role' value={newMember.role} onChange={onInputChange}>
                        <option disabled selected hidden>Select One</option>
                        <option>Project Manager</option>
                        <option>Assistant PM</option>
                        <option>Fullstack Developer</option>
                        <option>Frontend Engineer</option>
                        <option>Backend Engineer</option>
                        <option>Information Architect</option>
                        <option>Designer</option>
                    </select>
                </label>
                <br/>
                <label>
                    Email: <input name='email' value={newMember.email} onChange={onInputChange} type='email' />
                </label>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
