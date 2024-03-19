import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from "@mui/material/FormGroup"; 
import FormControl from "@mui/material/FormControl"; 
import FormLabel from "@mui/material/FormLabel"; 



function ClientRegisterForm() {
  return (
    <FormControl component="fieldset"> 
        <FormLabel component="legend"> 
          Formulario de Registro de Clientes
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
        </FormGroup>
    <Button variant='contained'>Registrar</Button>
    </FormControl> 
  );
}


export default ClientRegisterForm;
