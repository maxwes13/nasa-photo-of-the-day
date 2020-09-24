import React from "react";
import styled from "styled-components";
import HeadLogo from "./HeadLogo";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 150px;
    margin-bottom: 50px;
`;

const HeadText = styled.h1`
    text-align: right
`;


function Header () {

    return (
        <Wrapper>
            <HeadLogo />
            <HeadText>The NASA Image Project</HeadText>
        </Wrapper>
    )

}

export default Header