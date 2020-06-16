import React, { useState, Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Resumen from "./components/Resumen";
import Spinner from "./components/Spinner";

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
    //state de principal
    const [Datos, setDatos] = useState({
        resultado: 0,
        datos: {
            marca: "",
            year: "",
            plan: "",
        },
    });

    //para spinner
    const [cargando, setCargando] = useState(false);

    const { resultado, datos } = Datos;
    return (
        <Contenedor>
            <Header titulo={"Cotizador de Seguros"} />
            <ConFormulario>
                <Formulario setDatos={setDatos} setCargando={setCargando} />
                {cargando ? (
                    <Spinner />
                ) : (
                    <Fragment>
                        <Resumen datos={datos} />
                        <Resultado resultado={resultado} />
                    </Fragment>
                )}
            </ConFormulario>
        </Contenedor>
    );
}

export default App;
