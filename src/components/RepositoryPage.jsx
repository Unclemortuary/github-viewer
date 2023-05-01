import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Grid from './grid/Grid';
import BasePage from './BasePage';
import Button from './button/Button';
import { getSelectedRepository } from '../modules/repository';
import { setData, getData, reset } from '../modules/commit';
import { requestRepositories } from '../modules/api';

export const RepositoryPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const repository = useSelector(getSelectedRepository);
    const rowData = useSelector(getData);
    const [loading, setLoading] = useState(true);

    const [columnDefs, setColumnDefs] = useState([
        { field: 'commit', headerName: 'Автор', valueGetter: ({ data }) => data.commit.author.name },
        { field: 'sha', headerName: 'Хэш' },
        {
            field: 'commit',
            headerName: 'Дата',
            valueGetter: ({ data }) =>  data.commit.author.date,
            valueFormatter: ({ value }) => typeof value === 'string' ? value.split('T')[0] : ""
        },
    ]);

    useEffect(() => {
        // const abortController = new AbortController();
        if (!repository) {
            navigate('/');
            return;
        }
        setLoading(true)
        const onSuccess = data => {
            dispatch(setData(data));
        };
        const onCleanup = () => setLoading(false);
        requestRepositories({ url: `${repository.url}/commits`, onSuccess, onCleanup });

        return () => {
            dispatch(reset());
        }
    }, []);

    const header = (
        <>
            <section className='flex flex-col items-center justify-start mr-auto'>
                <span className='font-medium text-3xl'>Unclemortuary</span>
                <span className='font-light text-lg'>Артём Гусев</span>
            </section>

            <section className='flex gap-4 flex-col items-center mx-auto text-center'>
                <p className='text-4xl font-extralight'>{repository?.name}</p>
            </section>

            <img className='ml-auto w-16 h-auto rounded-full' src='https://avatars.githubusercontent.com/u/15903982?v=4'/>
        </>
    );

    const grid = (
        <>
            <Grid
                columnDefs={columnDefs}
                rowData={loading ? null : rowData}
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