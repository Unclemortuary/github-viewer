import React from 'react';
import { useSelector } from 'react-redux';
import { getLogin, getName } from '../../modules/user';

const LoginSection = ({ containerClassName }) => {
    const login = useSelector(getLogin);
    const name = useSelector(getName);

    return (
        <section className={'flex flex-col items-center justify-start ' + containerClassName}>
            <span className='font-medium text-3xl'>{name}</span>
            <span className='font-light text-lg'>{login}</span>
        </section>
    );
};

export default LoginSection;