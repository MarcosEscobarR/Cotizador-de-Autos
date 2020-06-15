import React, { Fragment } from "react";
import styled from "@emotion/styled"

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26c6da;
        cursor: pointer;
    }
`

const Formulario = () => {
    return (
        <Fragment>
            <form>
                <div class="form-group">
                    <label>Marca</label>
                    <select class="form-control">
                        <option value="">---Seleccione</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Anho</label>
                    <select class="form-control">
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

                <div class="form-group mb-5">
                    <label class="d-block ">Plan</label>
                    <input type="radio" class="mx-3" name="plan" value="basico" />
                    Basico
                    <input  type="radio" class="mx-3" name="plan" value="completo" />
                    Completo
                </div>

                <Button type="submit" >Cotizar el Seguro</Button>
            </form>
        </Fragment>
    );
};

export default Formulario;
