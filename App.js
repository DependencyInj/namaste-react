
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header/Header';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Error from './src/components/Error/Error';
import RestaurentMenu from './src/components/RestaurentMenu/RestaurentMenu';
import ShimmerCards from "./src/components/loaders/ShimmerLoader/ShimmerLoader";
import InstaMart from './src/components/InstaMart/InstaMart';
import { Provider } from 'react-redux';
import store from './src/utils/store';

const Body = lazy(() => import("./src/components/Body/Body"));
const AboutUs = lazy(() => import("./src/components/AboutUs/AboutUs"));
const Contact = lazy(() => import("./src/components/Contact/Contact"))

export default AppLayout = () => {
    return (
        <Provider store={store}>
            <div className='app'>
                <Header />
                <Outlet />
            </div>
        </Provider>
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
                    <Suspense fallback={<ShimmerCards />}>
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
            },
            {
                path: '/instamart',
                element: <InstaMart />
            },
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

