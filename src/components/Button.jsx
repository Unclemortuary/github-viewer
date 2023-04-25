import React from 'react';

const Button = ({ className, onClick, text, disabled }) =><button disabled={disabled} className={'bg-fruit-salad-400 px-4 rounded-lg shadow-lg text-fruit-salad-800 enabled:hover:bg-fruit-salad-200 transition-all focus:outline-yellow-300 outline-2 disabled:opacity-50 ' + className} onClick={onClick}>{text}</button>;

export default Button;