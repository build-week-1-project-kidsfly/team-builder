import React, { useState } from 'react';
import MemberList from "./components/MemberList";
import { AlphaTeam } from "./teamdata";
import Form from "./components/Form";

const App = () => {
    const [team, setTeam] = useState(AlphaTeam);
    console.log(team);
    return (
        <div className='hello'>
            <Form setNewMember={setTeam} members={team}  />
            <h1 className='align'>Development Team</h1>
            <MemberList groupData={team} />
        </div>
    );
};

export default App;
