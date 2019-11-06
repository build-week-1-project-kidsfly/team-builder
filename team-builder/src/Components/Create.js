import React, { useState } from 'react';
import { Card } from './TeamList.js';
import Button from "react-bootstrap";

const Create = props => {
    const initialMember = { name: "", nickname: "", role: "", email: "" };
    const [newMember, setNewMember] = useState(initialMember);

    const handleChange = event => {
        setNewMember({...newMember, [event.target.name]: event.target.value})
    };

    const
};

export default Create;