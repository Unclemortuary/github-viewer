import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasePage from './BasePage';
import Grid from './grid/Grid';
import { URLS } from '../modules/app';

export const ProfilePage = () => {
    const navigate = useNavigate();

    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000, stars: 4 },
        { make: "Ford", model: "Mondeo", price: 32000, stars: 1 },
        { make: "Porsche", model: "Boxster", price: 72000, stars: 0 }
    ]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make', headerName: 'Наименование' },
        { field: 'model', headerName: 'Язык программирования' },
        { field: 'price', headerName: 'Описание' },
        { field: 'stars', headerName: 'Количество звёзд' }
    ]);

    const header = (
        <>
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
        </>
    );

    const grid = (
        <Grid
            columnDefs={columnDefs}
            rowData={rowData}
            onCellClicked={() => navigate(`/${URLS.repository}`)}
        />
    );

    return <BasePage header={header} grid={grid}/>
};