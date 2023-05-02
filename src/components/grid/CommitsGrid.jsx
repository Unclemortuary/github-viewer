import React from "react";
import { setData, getData, reset } from "../../modules/commit";
import { useGrid } from "./hooks";
import Grid from './Grid';

const CommitsGrid = ({ repositoryUrl }) => {
    const colDefs = [
        { field: 'commit', headerName: 'Автор', valueGetter: ({ data }) => data.commit.author.name },
        { field: 'sha', headerName: 'Хэш' },
        {
            field: 'commit',
            headerName: 'Дата',
            valueGetter: ({ data }) =>  data.commit.author.date,
            valueFormatter: ({ value }) => typeof value === 'string' ? value.split('T')[0] : ""
        },
    ];

    const [rowData, loading] = useGrid({
        url: `${repositoryUrl}/commits`,
        getDataSelector: getData,
        setDataAction: setData,
        resetAction: reset
    });

    return (
        <Grid
            rowData={rowData}
            loading={loading}
            colDefs={colDefs}
        />
    );
};

export default CommitsGrid;