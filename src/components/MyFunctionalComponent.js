import React, { useState, useEffect } from "react";
import styled from "styled-components";

// write CSS inside code itself
const StyledDiv = styled.div`
    color: red;
    background-color: skyblue;
`;
// go into styled-components.com documentation

const StyledDivSpecial = styled(StyledDiv)`
    color: blue;
`;

const MyFunctionalComponent = (props) => {
    const [pokemon, setPokemon] = useState("None yet");
    
    const handleClick = () => {
        setPokemon("Mudkip");
    };

    useEffect(() => {
        console.log("Functional component mounted");
    });

    return (<StyledDivSpecial>
        <h2>This is the functional component</h2>
        <p>{pokemon}</p>
        <button onClick={handleClick} >Change it</button>
    </StyledDivSpecial>);
};

export default MyFunctionalComponent;