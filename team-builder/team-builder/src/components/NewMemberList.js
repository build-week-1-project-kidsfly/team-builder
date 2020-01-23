import React from 'react';
import MemberCard from "./MemberCard";

const NewMemberList = props => {
    const { newMemData } = props;
    return (
        <div>
            {newMemData.map(person => {
                return <MemberCard member={person} />
            })}
        </div>
    );
};

export default NewMemberList;
