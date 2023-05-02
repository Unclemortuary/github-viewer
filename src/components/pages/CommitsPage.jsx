import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BasePage from '../layout/BasePage';
import LoginSection from '../layout/LoginSection';
import NameSection from '../layout/NameSection';
import AvatarSection from '../layout/ImageSection';
import CommitsGrid from '../grid/CommitsGrid';
import Button from '../button/Button';
import { getSelectedRepository } from '../../modules/repository';

export const CommitsPage = () => {
    const navigate = useNavigate();
    const repository = useSelector(getSelectedRepository);

    useEffect(() => {
        if (!repository) {
            navigate('/');
            return;
        }
    }, []);

    const header = (
        <>
            <LoginSection containerClassName='mr-auto'/>
            <NameSection name={repository?.name} containerClassName='mx-auto'/>
            <AvatarSection containerClassName='ml-auto'/>
        </>
    );

    const grid = (
        <>
            <CommitsGrid repositoryUrl={repository?.url} />
            <Button
                onClick={() => navigate(-1)}
                className='w-24 h-16 mx-4 flex items-center gap-1 mb-2'
                text={<><span className='text-base block h-5'>&#x2190;</span> назад</>}
            />
        </>
    );

    return repository && <BasePage header={header} grid={grid}/>;
};