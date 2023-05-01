import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BasePage from './BasePage';
import LoginSection from './LoginSection';
import AvatarSection from './ImageSection';
import Grid from './grid/Grid';
import { URLS } from '../modules/app';
import { getReposUrl } from '../modules/user';
import { setData, setSelectedRepository, getData } from '../modules/repository';
import { requestRepositories } from '../modules/api';

export const ProfilePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const reposUrl = useSelector(getReposUrl);
    const rowData = useSelector(getData);
    const [loading, setLoading] = useState(true);

    const [columnDefs, setColumnDefs] = useState([
        { field: 'name', headerName: 'Наименование' },
        { field: 'language', headerName: 'Язык программирования' },
        { field: 'description', headerName: 'Описание', tooltipValueGetter: e => e.data.description },
        { field: 'stargazers_count', headerName: 'Количество звёзд' }
    ]);

    const fetchGridData = () => {
        if (rowData.length) {
            setLoading(false);
            return;
        }

        const onSuccess = data => {
            dispatch(setData(data));
        };
        const onCleanup = () => setLoading(false);
        requestRepositories({ url: reposUrl, onSuccess, onCleanup });
    };

    useEffect(() => {
        // const abortController = new AbortController();
        if (!reposUrl) {
            navigate('/');
            return;
        }
        fetchGridData();
    }, []);

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
            rowData={loading ? null : rowData}
            onCellClicked={e => {
                dispatch(setSelectedRepository({
                    url: e.data.url,
                    name: e.data.name
                }));
                navigate(`/${URLS.repository}`);
            }}
        />
    );

    return <BasePage header={header} grid={grid}/>;
};