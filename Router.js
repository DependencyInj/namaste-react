import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './App';
import AboutUs from './src/components/AboutUs/AboutUs';

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />
    },
    {
        path:'/about',
        element: <AboutUs />
    },
    {
        a
    }
]);

export default appRouter;