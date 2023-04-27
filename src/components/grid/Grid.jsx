import React, { useRef, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid';
import 'ag-grid-community/styles/ag-theme-material';
import './ag-grid-overrides.scss';

const Grid = props => {
    const gridRef = useRef();

    useEffect(() => {
        const fit = () => gridRef.current.api.sizeColumnsToFit();
        window.addEventListener('resize', fit);
        return () => {
            window.removeEventListener('resize', fit);
        }
    }, []);

    return (
        <div className='p-4 pt-0 w-full h-full max-h-3/4 ag-theme-material rounded-lg'>
            <AgGridReact
                ref={gridRef}
                sizeCol
                onGridReady={() => {
                    gridRef.current.api.sizeColumnsToFit();
                }}
                {...props}
            />
        </div>
    );
};

export default Grid;