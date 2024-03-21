import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { dataColumns, rows } from './properties';

function ClientList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={dataColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}      />
    </div>
  );
}

export default ClientList;