import React from 'react';
import { useSelector } from 'react-redux';
import { getAvatarUrl } from '../modules/user';

const AvatarSection = ({ containerClassName }) => {
    const src = useSelector(getAvatarUrl);

    return (
        <section className={'flex items-center justify-center ' + containerClassName}>
            <img className='w-16 h-auto rounded-full' src={src}/>
        </section>
    );
};

export default AvatarSection;