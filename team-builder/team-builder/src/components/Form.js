import React, { useState } from 'react';
// import NewMemberList from "./NewMemberList";

const Form = props => {
    const [newMember, setNewMember] = useState({
        name: "",
        nickname: "",
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
        console.log(newMember);
        // (!newMember.name || newMember.email) ? alert("Name and Email are required!") : props.setNewMember([newMember, ...props.members]) ;
        setNewMember({
            name: "",
            nickname: "",
            role: "",
            email: ""
        })
    };

    return (
        <div className='hello'>
            <form onSubmit={onInputSubmit}>
                <label>
                    Name: <input name='name' value={newMember.name} onChange={onInputChange} type='text' />
                </label>
                <br/>
                <label>
                    Nickname: <input name='nickname' value={newMember.nickname} onChange={onInputChange} type='text' />
                </label>
                <br/>
                <label>
                    Role:
                    <select name='role' onChange={onInputChange}>
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
            {/*<NewMemberList newMemData={newMember} />*/}
        </div>
    );
};

export default Form;
