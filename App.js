
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header/Header';
import Body from './src/components/Body/Body';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import AboutUs from './src/components/AboutUs/AboutUs';


export default AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/home',
        element: <AppLayout />
    },
    {
        path:'/about',
        element: <AboutUs />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>);

