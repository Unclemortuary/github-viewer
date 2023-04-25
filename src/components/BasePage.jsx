import React from 'react';

const BasePage = ({ header, grid }) => {
    return (
        <div className='min-h-0 flex flex-col gap-3'>
            <HeaderWrapper>
                {header}
            </HeaderWrapper>

            <Divider/>

            <GridWrapper>
                {/* <p className='text-6xl font-extralight text-white m-auto h-full'>Нет данных</p> */}
                {grid}
            </GridWrapper>
        </div>
    )
};

const HeaderWrapper = ({ children }) => (
    <div className='p-4 pb-0 grid gap-8 grid-cols-[1fr_4fr_1fr] text-white'>
        {children}
    </div>
);

const Divider = () => <div className='mb-3 w-full h-0 border-t border-fruit-salad-950'></div>;

const GridWrapper = ({ children }) => <div className='overflow-hidden p-4 pt-0 w-full h-full ag-theme-material rounded-lg'>{children}</div>;

export default BasePage;