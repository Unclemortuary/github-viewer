import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from './button/Button';
import { URLS } from '../modules/app';
import { setLogin, getLogin, setUser, reset } from '../modules/user';
import { requestUser } from '../modules/api';

export const SearchPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const login = useSelector(getLogin);
    const [loading, setLoading] = useState(false);
    const validInput = login.trim() !== "";

    const handleInputChange = e => {
        dispatch(setLogin(e.target.value));
    };

    const handleInputKeyDown = e => {
        if (e.key === 'Enter' && validInput) {
            e.preventDefault();
            onSubmit();
        }
    };

    const onSubmit = () => {
        const sanitizedInput = login.trim();
        const onBefore = () => {
            dispatch(reset());
            setLoading(true);
        }
        const onSuccess = user => {
            dispatch(setUser(user));
            navigate(URLS.profile);
        };
        requestUser({
            username: sanitizedInput,
            onBefore,
            onSuccess,
            onCleanup: () => setLoading(false)
        });
    };

    return (
        <div className='flex self-center my-auto relative'>
            <input
                className='w-96 h-12 rounded-md px-4 shadow-lg outline-none transition-all focus:outline-yellow-300 outline-2'
                type='text'
                placeholder='Введите логин'
                value={login}
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
            />
            <Button
                className='ml-4'
                disabled={!validInput}
                onClick={onSubmit}
                text='Перейти к профайлу'
            />
            {/* spinner overlay */}
            { loading && <p className=' absolute w-8 h-6 left-1/3 -top-32 inset-1 text-white font-light text-lg'>Ищем</p> } 
        </div>
    );
};