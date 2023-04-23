import React from 'react'

export const SearchPage = () => {
    return (
        <div className='flex self-center my-auto'>
            <input className='w-96 h-12 rounded-md px-4 shadow-lg outline-none transition-all focus:outline-yellow-300 outline-2' type='text' placeholder='Введите логин'/>
        </div>
    );
};