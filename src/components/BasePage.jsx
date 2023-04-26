import React from 'react';

const BasePage = ({ header, grid }) => {
    return (
        <div className='min-h-0 h-full flex flex-col gap-3'>
            <HeaderWrapper>
                {header}
            </HeaderWrapper>

            <Divider/>

            <GridWrapper>
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

const GridWrapper = ({ children }) => <div className='flex h-3/4 flex-col gap-3'>{children}</div>;

export default BasePage;