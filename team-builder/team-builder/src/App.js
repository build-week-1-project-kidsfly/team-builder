import React, { useState } from 'react';
import MemberList from "./components/MemberList";
import { AlphaTeam } from "./teamdata";
import Form from "./components/Form";

const App = () => {
    const [team, setTeam] = useState(AlphaTeam);
    console.log(team);
    return (
        <div className='hello'>
            <h1 className='align'>New Members</h1>
            <Form setNewMember={setTeam} members={team}  />
            <h1 className='align'>Original Members</h1>
            <MemberList groupData={team} />
        </div>
    );
};

export default App;
