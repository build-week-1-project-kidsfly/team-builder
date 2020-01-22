import React, { useState } from 'react';
import MemberList from "./components/MemberList";
import { AlphaTeam } from "./teamdata";
import styled from "styled-components";

const Center = styled.div`
    width: 80%;
    marginLeft: auto;
    marginRight: auto;
    color: red;
`;

const App = () => {
    const [team, setTeam] = useState({});
    return (
        <div class='hello'>
            <h1 className='align'>Original Members</h1>
            <MemberList groupData={AlphaTeam} />
            <h1 className='align'>New Members</h1>
        </div>
    );
};

export default App;
