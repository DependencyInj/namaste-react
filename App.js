
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header/Header';
import Body from './src/components/Body/Body';
import { RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';
import AboutUs from './src/components/AboutUs/AboutUs';
import Error from './src/components/Error/Error';
import Contact from './src/components/Contact/Contact';
import RestaurentMenu from './src/components/RestaurentMenu/RestaurentMenu';
import ShimmerMenuItem from './src/components/loaders/ShimmerMenuItem/ShimmerMenuItem';


export default AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:'/',
                element: <Body/>
            },
            {
                path:'/about',
                element: <AboutUs />
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/restaurent/:id',
                element: <RestaurentMenu />
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);

