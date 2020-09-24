import React from "react";
import styled from "styled-components";
import Image from "./NasaLogo.png"

const HeadImg = styled.img`
    width: 15%;
`;


function HeadLogo () {

    return (
        <HeadImg src={Image}></HeadImg>
    )
}

export default HeadLogo