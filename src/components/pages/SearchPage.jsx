import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button/Button';
import Spinner from '../layout/Spinner';
import { URLS } from '../../modules/app';
import { setLogin, getLogin, setUser, reset } from '../../modules/user';
import { requestUser } from '../../modules/api';

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
        dispatch(reset());
        setLoading(true);
        requestUser({
            username: sanitizedInput
        })
        .then(response => {
            if (response.status === 200) {
                dispatch(setUser(response.data));
                navigate(URLS.repositories);
            }
        })
        .catch(e => {
            if (e.response?.status) alert('Пользователь с таким логином не найден');
            else alert(e)
        })
        .finally(() => setLoading(false))
    };

    return (
        <div className='flex self-center my-auto'>
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
            { loading && <Spinner className='!absolute bottom-2/3 right-1/2'/> }
        </div>
    );
};