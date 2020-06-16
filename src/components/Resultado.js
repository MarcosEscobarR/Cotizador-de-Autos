import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition} from "react-transition-group"
import Proptypes from "prop-types"

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const DivCotizacion = styled.p`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const Cotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({ resultado }) => {
    return resultado === 0 ? (
        <Mensaje>
            Seleccione la marca y el anho de su vehiculo junto con el plan que
            desea contratar
        </Mensaje>
    ) : (
        <DivCotizacion>
            <TransitionGroup
                component="span"
                className='resultado'
            >
                <CSSTransition
                    classNames="resultado"
                    key={resultado}
                    timeout={{enter: 500, exit: 500}}
                >
                    <Cotizacion>Costo del Seguro: <span>{resultado}</span></Cotizacion>
                </CSSTransition>
            </TransitionGroup>
        </DivCotizacion>
    );
};

Resultado.propTypes = {
    resultado: Proptypes.number.isRequired,
}
export default Resultado;
