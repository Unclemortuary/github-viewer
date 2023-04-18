import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from '../modules/app';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1 className="text-4xl text-blue-700">Merhaba!</h1>
    }
]);

const App = () => {
    return (
        <RouterProvider router={router}>
            <Provider store={store}>
                <h1 className="text-4xl text-blue-700">Merhaba!</h1>
            </Provider>
        </RouterProvider>
    );
};

export default App;
