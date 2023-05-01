import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData, setSelectedRepository, getData } from "../../modules/repository";
import { useGrid } from "./hooks";
import { URLS } from "../../modules/app";
import Grid from './Grid';

const RepositoriesGrid = ({ repositoryUrl }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const colDefs = [
        { field: 'name', headerName: 'Наименование' },
        { field: 'language', headerName: 'Язык программирования' },
        { field: 'description', headerName: 'Описание', tooltipValueGetter: e => e.data?.description },
        { field: 'stargazers_count', headerName: 'Количество звёзд' }
    ];

    const [rowData, loading] = useGrid({
        url: repositoryUrl,
        getDataSelector: getData,
        setDataAction: setData
    });

    return (
        <Grid
            rowData={rowData}
            loading={loading}
            colDefs={colDefs}
            onCellClicked={e => {
                dispatch(setSelectedRepository({
                    url: e.data.url,
                    name: e.data.name
                }));
                navigate(`/${URLS.commits}`);
            }}
        />
    );
};

export default RepositoriesGrid;