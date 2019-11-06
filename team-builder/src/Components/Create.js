import React, { useState } from 'react';
// import { Card } from './TeamList.js';
import Button from "react-bootstrap";

const Create = props => {
    const initialMember = { name: "", nickname: "", role: "", email: "" };
    const [newMember, setNewMember] = useState(initialMember);

    const handleChange = event => {
        setNewMember({...newMember, [event.target.name]: event.target.value})
    };

    const handleSubmit = event => {
        event.preventDefault();

        (!newMember.name || !newMember.email) ? alert("Name and email are required") : props.setMember([newMember, ...props.members]);

        resetForm();
    };

    const resetForm = () => {
        setNewMember(initialMember);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CenteredForm>
                    <h2>New Team Member</h2>
                    <div>
                        <label for='name'>Name</label>
                        <input type='text' name='name' className='name' onChange={handleChange} placeholder='John Smith' value={newMember.name} />
                    </div>
                    <div className='input-stack'>
                        <label htmlFor='nickname'>Nickname</label>
                        <input type='text' name='nickname' className='nickname' onChange={handleChange} placeholder='Jonny' value={newMember.nickname}/>
                    </div>
                    <div className='input-stack'>
                        <label for='role'>Role</label>
                        <select></select>
                    </div>
                </CenteredForm>
            </form>
        </div>
    );


};

export default Create;