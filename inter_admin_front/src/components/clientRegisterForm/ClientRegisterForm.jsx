import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from "@mui/material/FormGroup"; 
import FormControl from "@mui/material/FormControl"; 
import FormLabel from "@mui/material/FormLabel";
import Divider from '@mui/material/Divider';



function ClientRegisterForm() {
  return (
    <FormControl component="fieldset"> 
        <FormLabel component="legend"> 
          Datos del Cliente
        </FormLabel> 
        <FormGroup aria-label="position"> 
          <TextField
            id="name"
            label="Nombre del cliente"
          />
          <TextField
            id="socialName"
            label="Razón Social"
          />
          <TextField
            id="rut"
            label="RUT"
          />
          <TextField
            id="legalRepresentativeName"
            label="Legal Representative Name"
          />
        </FormGroup>

        <Divider component={"li"} />

        <FormLabel component="legend"> 
          Datos del Representante Legal
        </FormLabel> 
        <FormGroup aria-label="position"> 
          <TextField
            id="legalRepresentativeName"
            label="Nombre"
          />
          <TextField
            id="legalRepresentativeEmail"
            label="Correo Electrónico"
          />
          <TextField
            id="legalRepresentativePhone"
            label="Teléfono de contacto"
          />
        </FormGroup>
    <Button variant='contained'>Registrar</Button>
    </FormControl> 
  );
}


export default ClientRegisterForm;
