import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import { obtenerYears, calcularMarca, calculaPlan } from "../Helper.js";
import PropTypes from "prop-types";

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color 0.3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26c6da;
        cursor: pointer;
    }
`;

const CError = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

`

const Formulario = ({setDatos, setCargando}) => {
    //state para guardar los datos del formulario
    const [Formulario, setFormulario] = useState({
        marca: "",
        year: "",
        plan: "",
    });

    //state de error
    const [Error, setError] = useState(false);

    //destructuring al state de formularios
    const { marca, year, plan } = Formulario;

    //funcion que guarda los datos
    const setInformation = (e) => {
        setFormulario({
            ...Formulario,
            [e.target.name]: e.target.value,
        });
    };

    //funcion de submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //validacion
        if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        let resultado = 2000;
        //obtener la diferencia de years
        let diferencia = obtenerYears(year);
                
        //por cada year hay que restar el 3%
        resultado -= (diferencia * 3 * resultado) / 100;
        
        
        //Americano 15%
        //Asiatico 5%
        //Europeo 30%
        resultado *= calcularMarca(marca);

        //Basico aumenta 20%
        //Completo 50%
        resultado *= parseFloat(calculaPlan(plan)).toFixed(2)
        //Total
        
        setCargando(true)
        setTimeout(() => {
            setCargando(false);
            setDatos({
                resultado: Number(resultado),
                datos: Formulario
            })
        }, 3000)
    };
    return (
        <Fragment>
            {Error ? <CError>Todos los campos deben estar cargados</CError>: null}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Marca</label>
                    <select
                        className="form-control"
                        name="marca"
                        value={marca}
                        onChange={setInformation}
                    >
                        <option value="">---Seleccione</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Anho</label>
                    <select
                        className="form-control"
                        name="year"
                        value={year}
                        onChange={setInformation}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </select>
                </div>

                <div className="form-group mb-5">
                    <label className="d-block ">Plan</label>
                    <input
                        type="radio"
                        className="mx-3"
                        name="plan"
                        value="basico"
                        checked={plan === "basico"}
                        onChange={setInformation}
                    />
                    Basico
                    <input
                        type="radio"
                        className="mx-3"
                        name="plan"
                        value="completo"
                        checked={plan === "completo"}
                        onChange={setInformation}
                    />
                    Completo
                </div>

                <Button type="submit">Cotizar el Seguro</Button>
            </form>
        </Fragment>
    );
};

Formulario.propTypes ={ 
    setDatos: PropTypes.func.isRequired,
    setCargando: PropTypes.func.isRequired
}

export default Formulario;
