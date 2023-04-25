import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export const SearchPage = () => {
    const navigate = useNavigate();
    const [loginInput, setLoginInput] = useState("");

    return (
        <div className='flex self-center my-auto'>
            <input className='w-96 h-12 rounded-md px-4 shadow-lg outline-none transition-all focus:outline-yellow-300 outline-2' type='text' placeholder='Введите логин' value={loginInput} onChange={e => setLoginInput(e.target.value)}/>
            <Button
                className='ml-4'
                disabled={loginInput === ""}
                onClick={() => navigate('profile')} text='Перейти к профайлу'
            />
        </div>
    );
};