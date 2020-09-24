import React from "react";
import Nasa from "./nasa.jpeg"
import styled from "styled-components";


const FootImg = styled.img`
    width: 25%;
`;

function Footer () {

    return (
        <div>
            <FootImg src={Nasa}></FootImg>
            <h4>Copyright 2020</h4>
        </div>
    )

}

export default Footer