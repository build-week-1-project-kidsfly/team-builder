import React from 'react';
import MemberCard from "./MemberCard";



const MemberList = props => {
    const { groupData } = props;
    return (
        <div>
            {groupData.map(memb => {
                return <MemberCard member={memb} />
            })}
        </div>
    );
};

export default MemberList;
