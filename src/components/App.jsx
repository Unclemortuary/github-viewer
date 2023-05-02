import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { store, URLS } from '../modules/app';
import { Provider } from 'react-redux';
import { SearchPage } from './pages/SearchPage';
import { RepositoriesPage } from './pages/RepositoriesPage';
import { CommitsPage } from './pages/CommitsPage'

const router = createHashRouter([
    {
      path: "/",
      element: <SearchPage />,
    },
    {
        path: `/${URLS.repositories}`,
        element: <RepositoriesPage />,
    },
    {
        path: `/${URLS.commits}`,
        element: <CommitsPage />,
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