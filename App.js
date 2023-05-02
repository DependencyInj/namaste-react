
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header/Header';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Error from './src/components/Error/Error';
import RestaurentMenu from './src/components/RestaurentMenu/RestaurentMenu';


const Body = lazy(() => import("./src/components/Body/Body"));
const AboutUs = lazy(() => import("./src/components/AboutUs/AboutUs"));
const Contact = lazy(() => import("./src/components/Contact/Contact"))

export default AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element:
                    <Suspense>
                        <Body />
                    </Suspense>
            },
            {
                path: '/about',
                element:
                    <Suspense>
                        <AboutUs />
                    </Suspense>
            },
            {
                path: '/contact',
                element:
                    <Suspense>
                        <Contact />
                    </Suspense>
            },
            {
                path: '/restaurent/:id',
                element: <RestaurentMenu />
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

