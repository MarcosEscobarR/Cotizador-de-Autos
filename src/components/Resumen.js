import React from "react";
import styled from "@emotion/styled";
import { aMayuscula } from "../Helper.js";
import PropTypes from "prop-types";

const CResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
    const { marca, year, plan } = datos;
    if (marca === "" || year === "" || plan === "") {
        return null;
    }

    return (
        <CResumen>
            <h2>Resumen del Auto</h2>
            <p>Marca: {aMayuscula(marca)}</p>
            <p>Plan: {aMayuscula(plan)}</p>
            <p>Anho: {year}</p>
        </CResumen>
    );
};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired,
};

export default Resumen;
