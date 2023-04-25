import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import BasePage from './BasePage';
import Button from './Button';

import 'ag-grid-community/styles/ag-grid';
import 'ag-grid-community/styles/ag-theme-material';
import './ag-grid-overrides.scss';

export const RepositoryPage = () => {
    const gridRef = useRef();
    const navigate = useNavigate();

    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 }
    ]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make', headerName: 'Автор' },
        { field: 'model', headerName: 'Хэш' },
        { field: 'price', headerName: 'Дата' }
    ]);

    useEffect(() => {
        const fit = () => setTimeout(() => gridRef.current.api.sizeColumnsToFit());
        window.addEventListener('resize', fit);
        return () => {
            window.removeEventListener('resize', fit);
        }
    }, []);

    const header = (
        <>
            <section className='flex flex-col items-center justify-start mr-auto'>
                <span className='font-medium text-3xl'>Unclemortuary</span>
                <span className='font-light text-lg'>Артём Гусев</span>
            </section>

            <section className='flex gap-4 flex-col items-center mx-auto text-center'>
                <p className='text-4xl font-extralight'>Репозиторий с ну прямо очень очень очень длинным названием</p>
            </section>

            <img className='ml-auto w-16 h-auto rounded-full' src='https://avatars.githubusercontent.com/u/15903982?v=4'/>
        </>
    );

    const grid = (
        <>
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
            <Button
                onClick={() => navigate(-1)}
                className='h-10'
                text={<><span className='text-base'>&#x2190;</span> назад</>}
            />
        </>
    );

    return <BasePage header={header} grid={grid}/>
};