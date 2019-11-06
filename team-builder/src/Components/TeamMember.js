import React from 'react';

const TeamMember = props => {
    const { name, nickname, role, email } = props;
    return (
        <div>
            <h1>{name}</h1>
            <h4>({nickname})</h4>
            <h4>Role: {role}</h4>
            <h4>Email: {email           }</h4>
        </div>
    );
};

export default TeamMember;