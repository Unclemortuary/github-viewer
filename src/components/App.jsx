import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { store, URLS } from '../modules/app';
import { Provider } from 'react-redux';
import { SearchPage } from './SearchPage';
import { ProfilePage } from './ProfilePage';
import { RepositoryPage } from './RepositoryPage';

const router = createHashRouter([
    {
      path: "/",
      element: <SearchPage />,
    },
    {
        path: `/${URLS.profile}`,
        element: <ProfilePage />,
    },
    {
        path: `/${URLS.repository}`,
        element: <RepositoryPage />,
    }
]);

const App = () => {
    return (
        <div className='flex min-h-0 min-w-min flex-col h-screen w-screen bg-gradient-to-b from-fruit-salad-700 to-fruit-salad-950'>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </div>
        
    );
};

export default App;