import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import About from './components/About';
import Help from './components/Help';
import Dummy2 from './components/Dummy2'


const AppLayout=()=>{
    return (
        <div>
            <Header/>
            {/* <Carousel/> */}
            <Body/>
            <Footer/>

            {/* <Dummy2/> this is for filter imp */}

            {/* <About/> */}

            {/* <Help/> */}
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)






            {/* <MySwitch/> https://chat.openai.com/share/3ea02404-0bad-48b1-9c8d-6655ea488eb3 */}
