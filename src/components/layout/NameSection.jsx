import React from "react";

const NameSection = ({ name, containerClassName }) => {
    return (
        <section className={'flex gap-4 flex-col items-center justify-center text-center ' + containerClassName}>
            <p className='text-4xl font-extralight'>{name}</p>
        </section>
    );
};

export default NameSection;