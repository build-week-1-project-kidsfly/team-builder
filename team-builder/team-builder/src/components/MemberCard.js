import React from 'react';

const MemberCard = props => {
    const { member } = props;
    return (
        <div className='align'>
            <h2>{member.name}</h2>
            <p>{`Nickname: ${member.nickname}`}</p>
            <p>{`Role: ${member.role}`}</p>
            <h4>{member.email}</h4>
        </div>
    );
};

export default MemberCard;
