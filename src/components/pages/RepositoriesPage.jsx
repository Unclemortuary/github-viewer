import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BasePage from '../layout/BasePage';
import LoginSection from '../layout/LoginSection';
import NameSection from '../layout/NameSection';
import AvatarSection from '../layout/ImageSection';
import RepositoriesGrid from '../grid/RepositoriesGrid';
import { getReposUrl } from '../../modules/user';

export const RepositoriesPage = () => {
    const navigate = useNavigate();
    const reposUrl = useSelector(getReposUrl);

    useEffect(() => {
        if (!reposUrl) {
            navigate('/');
            return;
        }
    }, []);

    const header = (
        <>
            <LoginSection containerClassName='mr-auto'/>
            <NameSection name='Список публичных репозиториев' containerClassName='mx-auto'/>
            <AvatarSection containerClassName='ml-auto'/>
        </>
    );

    const grid = <RepositoriesGrid repositoryUrl={reposUrl}/>;

    return <BasePage header={header} grid={grid}/>;
};