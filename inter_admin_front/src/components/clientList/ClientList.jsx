import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Grid } from '@mui/material';
import { dataColumns, rows } from './properties';
import ClientRegisterFormDialog from '../ClientRegisterFormDialog/ClientRegisterFormDialog';

function ClientList() {
  return (
    <Box sx={{ flexGrow: 1, ml: 2, mr: 2}}>
        <Grid container>
            <Grid item>
                <Box sx={{ flexGrow: 1, mt: 2, mb: 2}}>
                    <Grid container item>
                        <ClientRegisterFormDialog />
                    </Grid>
                </Box>
            </Grid>        
        </Grid>
        <Grid container>
            <DataGrid
                rows={rows}
                columns={dataColumns}
                initialState={{
                    pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </Grid>
    </Box>
  );
}

export default ClientList;