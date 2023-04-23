import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid';
import 'ag-grid-community/styles/ag-theme-material';

export const ProfilePage = () => {
    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 }
    ]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make', filter: true },
        { field: 'model', filter: true },
        { field: 'price' }
    ]);

    return (
        <div className='w-96 h-96 ag-theme-material'>
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
            />
        </div>
    );
};