import React from 'react';
import MemberCard from "./MemberCard";



const MemberList = props => {
    const { groupData } = props;
    return (
        <div>
            {groupData.map((member, index) => {
                return <MemberCard key={index} member={member} />
            })}
        </div>
    );
};

export default MemberList;
