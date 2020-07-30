import React, { useState } from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items:center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display:block;
  width:100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
  &:hover {
    cursor: pointer;
  }
`;

const InputRadio = styled.input`
  margin: 0 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Boton = styled.button`
  background-color: #00838F;
  font-size:16px;
  width:100%;
  padding: 1rem;
  color: #fff;
  text-transform:uppercase;
  font-weight: bold;
  border:none;
  transition: background-color .3s ease;

  &:hover {
    cursor: pointer;
    background-color:#26C6DA;
  }

`;

const Error = styled.div`
  display:flex;
  background-color:red;
  color:white;
  width:100%;
  padding: 1rem;
  justify-content:center;
  margin-bottom: 2rem;

`;

const Formulario = () => {
  
  const [datos, guardarDatos] = useState({
    marca : '',
    year : '',
    plan : ''
  });
  const [error, guardarError] = useState(false);

  // extraer los datos del state para usarlos en el formulario
  const {marca, year, plan} = datos;

  // Funcion que guarda los datos
  const obtenerInformacion = e => {
    guardarDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  }

  // Cuando el usuario presiona submit

  const handleSubmit = e => {
    e.preventDefault();
    if( marca.trim() === '' || year.trim() === '' || plan ===''){
      guardarError(true);
      return;
    }
    guardarError(false);
  }
  
  return (
    <form
      onSubmit = {handleSubmit}
      >
      { error ? <Error>Todos los campos son obligatorios</Error> : null }
      <Campo>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value=""> --- Selecciones ----</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value=""> --- Selecciones ----</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        Basico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />{" "}
        Completo
      </Campo>
      <Boton type="submit">Cotizar</Boton>
    </form>
  );
}
 
export default Formulario;