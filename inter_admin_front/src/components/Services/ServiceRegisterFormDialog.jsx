import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from "@mui/material/FormGroup"; 
import FormControl from "@mui/material/FormControl"; 
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


function ServiceRegisterFormDialog() {
  const [open, setOpen] = React.useState(false);
  const [serviceType, setServiceType] = React.useState("Air")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setServiceType(event.target.value);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Formulario de Registro de servicios
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
            <FormGroup aria-label="position">
                <Select
                    id="serviceType"
                    value={serviceType}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    autoWidth
                    displayEmpty
                >
                    <MenuItem value={"Air"}>Aire</MenuItem>
                    <MenuItem value={"Water"}>Agua</MenuItem>
                </Select>
                <TextField
                    id="name"
                    label="Nombre del Servicio"
                    sx={{ my: 1 }}
                />
                 <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Amount"
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


export default ServiceRegisterFormDialog;