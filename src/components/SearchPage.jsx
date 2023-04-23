import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchPage = () => {
    const navigate = useNavigate();
    const [loginInput, setLoginInput] = useState("");

    return (
        <div className='flex self-center my-auto'>
            <input className='w-96 h-12 rounded-md px-4 shadow-lg outline-none transition-all focus:outline-yellow-300 outline-2' type='text' placeholder='Введите логин' value={loginInput} onChange={e => setLoginInput(e.target.value)}/>
            <button disabled={loginInput === ""} className='ml-4 bg-fruit-salad-300 px-4 rounded-lg shadow-lg text-fruit-salad-800 enabled:hover:bg-fruit-salad-200 transition-all focus:outline-yellow-300 outline-2 disabled:opacity-50' onClick={() => navigate('profile')}>Перейти к профайлу</button>
        </div>
    );
};