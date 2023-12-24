import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';
import Help from './components/Help';
import Dummy2 from './components/Dummy2'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

// https://ziggy-sooty.vercel.app/


const AppLayout=()=>{
    return (
        <div>
            <Header/>
            {/* <Carousel/> */}
            <Outlet/>
            <Footer/>

            {/* <Dummy2/> this is for filter imp */}
        </div>
    )
}


const  appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/help',
                element:<Help/>
            },

        ],
        errorElement:<PageNotFound/>

    },
    
])


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)






            {/* <MySwitch/> https://chat.openai.com/share/3ea02404-0bad-48b1-9c8d-6655ea488eb3 */}
