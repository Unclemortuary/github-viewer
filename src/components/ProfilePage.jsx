import React, { useState, useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid';
import 'ag-grid-community/styles/ag-theme-material';
import './ag-grid-overrides.scss';

export const ProfilePage = () => {
    const gridRef = useRef();

    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 }
    ]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make' },
        { field: 'model' }, 
        { field: 'price' }
    ]);

    useEffect(() => {
        const fit = () => gridRef.current.api.sizeColumnsToFit();
        window.addEventListener('resize', fit);
        return () => {
            window.removeEventListener('resize', fit);
        }
    }, []);

    return (
        <div className='h-full flex flex-col gap-3'>

            {/* header */}
            <div className='p-4 pb-0 grid gap-8 grid-cols-[minmax(300px,_1fr)_minmax(300px,_3fr)_minmax(100px,_1fr)] text-white'>
                <section className='flex flex-col items-center justify-start mr-auto'>
                    <span className='font-medium text-3xl'>Unclemortuary</span>
                    <span className='font-light text-lg'>Артём Гусев</span>
                </section>

                <section className='flex items-center mx-auto text-center'>
                    <p className='text-4xl font-extralight'>Список публичных репозиториев</p>
                </section>

                <section className='flex items-center justify-center'>
                    <img className='ml-auto w-16 h-auto rounded-full' src='https://avatars.githubusercontent.com/u/15903982?v=4'/>
                </section>
            </div>

            <div className='mt-4 mb-3 w-full h-0 border-t border-fruit-salad-950'></div>

            {/* grid */}
            <div className='p-4 pt-0 w-full h-full ag-theme-material rounded-lg'>
                <AgGridReact
                    ref={gridRef}
                    columnDefs={columnDefs}
                    rowData={rowData}
                    sizeCol
                    domLayout='autoHeight'
                    onGridReady={() => {
                        gridRef.current.api.sizeColumnsToFit();
                    }}
                />
            </div>
        </div>
    );
};