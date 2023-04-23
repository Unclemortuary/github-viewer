import React from 'react';
import { store } from '../modules/app';
import { Provider } from 'react-redux';
import { SearchPage } from './SearchPage';

const App = () => {
    return (
        <div className='flex flex-col h-screen w-screen bg-gradient-to-b from-fruit-salad-600 to-fruit-salad-700'>
                <Provider store={store}>
                    <SearchPage/>
                </Provider>
        </div>
        
    );
};

export default App;
