import React from 'react'
import styled from "@emotion/styled"
import PropTypes from "prop-types"
const ComponenteHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #ffffff
`;
const CTexto = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <ComponenteHeader> 
            <CTexto>{titulo}</CTexto>
        </ComponenteHeader>
    )
}
 Header.propTypes ={
     titulo: PropTypes.string.isRequired
 };
 
export default Header;