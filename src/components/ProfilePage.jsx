import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasePage from './BasePage';
import LoginSection from './LoginSection';
import AvatarSection from './ImageSection';
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
            <LoginSection containerClassName='mr-auto'/>

            <section className='flex items-center mx-auto text-center'>
                <p className='text-4xl font-extralight'>Список публичных репозиториев</p>
            </section>

            <AvatarSection containerClassName='ml-auto'/>
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