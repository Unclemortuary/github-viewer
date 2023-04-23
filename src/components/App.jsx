import React, { useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { store } from '../modules/app';
import { Provider } from 'react-redux';
import { SearchPage } from './SearchPage';
import { ProfilePage } from './ProfilePage';

const router = createHashRouter([
    {
      path: "/",
      element: <SearchPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
]);

const App = () => {
    return (
        <div className='flex flex-col h-screen w-screen bg-gradient-to-b from-fruit-salad-600 to-fruit-salad-700'>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
        
    );
};

export default App;