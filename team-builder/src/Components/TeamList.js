import React from 'react';
import TeamMember from "./TeamMember";


const TeamList = props => {
    const { data } = props;
    return(
        <div>
            {data.map((member, index) => {
                const { name, nickname, role, email } = member;
                return (<TeamMember key={index} name={name} nickname={nickname} role={role} email={email} />);
            })}
        </div>
    );
};

export default TeamList;