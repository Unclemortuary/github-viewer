import React from 'react';
import Loader from 'react-spinners/BarLoader';

export default ({ className, ...rest }) => <Loader color='white' className={className} {...rest}/>