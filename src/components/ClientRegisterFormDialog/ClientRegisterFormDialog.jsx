import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from "@mui/material/FormGroup"; 
import FormControl from "@mui/material/FormControl"; 
import FormLabel from "@mui/material/FormLabel";
import Divider from '@mui/material/Divider';


function ClientRegisterFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Formulario de Registro de clientes
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            handleClose();
          },
        }}
        fullWidth
      >
        <DialogTitle>Formulario de Registro</DialogTitle>
        <FormControl component="fieldset" sx={{ m: 3 }}>
            <FormLabel component="legend"> 
                Datos del Cliente
            </FormLabel> 
            <FormGroup aria-label="position"> 
                <TextField
                    id="name"
                    label="Nombre del cliente"
                    sx={{ my: 1 }}
                />
                <TextField
                    id="socialName"
                    label="Razón Social"
                    sx={{ mb: 1 }}
                />
                <TextField
                    id="rut"
                    label="RUT"
                    sx={{ mb: 1 }}
                />
            </FormGroup>

            <Divider component={"div"}  sx={{ mt: 2, mb: 2 }}/>

            <FormLabel component="legend"> 
                Datos del Representante Legal
            </FormLabel> 
            <FormGroup aria-label="position"> 
                <TextField
                    id="legalRepresentativeName"
                    label="Nombre"
                    sx={{ mb: 1 }}
                />
                <TextField
                    id="legalRepresentativeEmail"
                    label="Correo Electrónico"
                    sx={{ mb: 1 }}
                />
                <TextField
                    id="legalRepresentativePhone"
                    label="Teléfono de contacto"
                    sx={{ mb: 1 }}
                />
            </FormGroup>

            <Stack 
              gap={2}
              direction={{
                xs: 'row-reverse',
                sm: 'row',
              }}
              sx={{
                flexShrink: 0,
                alignSelf: { xs: 'center', sm: 'flex-end' }
              }}
            >
              <Button
                size="small"
                variant="contained"
                onClick={handleClose}
              >
                Registrar
              </Button>
              <Button size="small" onClick={handleClose}>
                Cancelar
              </Button>
            </Stack>
        </FormControl> 
      </Dialog>
    </React.Fragment>
  );
}


export default ClientRegisterFormDialog;