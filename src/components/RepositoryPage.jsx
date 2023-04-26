import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from './grid/Grid';
import BasePage from './BasePage';
import Button from './button/Button';

export const RepositoryPage = () => {
    const navigate = useNavigate();

    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxster", price: 72000 },
        { make: "Toyota", model: "Celica", price: 350 },
        { make: "Ford", model: "Mondeo", price: 320 },
        { make: "Porsche", model: "Boxste 123 r", price: 2000 },
        { make: "Toyota123", model: "Celica", price: 31000 },
        { make: "Ford", model: "Mondeo", price: 32200 },
        { make: "Porsche2", model: "Boxster", price: 720 }
    ]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make', headerName: 'Автор' },
        { field: 'model', headerName: 'Хэш' },
        { field: 'price', headerName: 'Дата' }
    ]);

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
            <Grid
                columnDefs={columnDefs}
                rowData={rowData}
            />
            <Button
                onClick={() => navigate(-1)}
                className='w-24 h-16 mx-4 flex items-center gap-1 mb-2'
                text={<><span className='text-base block h-5'>&#x2190;</span> назад</>}
            />
        </>
    );

    return <BasePage header={header} grid={grid}/>
};