import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario"

import styled from "@emotion/styled";

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;
const ConFormulario = styled.div`
    background-color: #fff;
    padding: 3rem;
`;

function App() {
    return (
        <Contenedor>
            <Header titulo={"Cotizador de Seguros"} />
            <ConFormulario>
            <Formulario />

            </ConFormulario>
        </Contenedor>
    );
}

export default App;
