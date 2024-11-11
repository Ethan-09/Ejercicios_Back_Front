import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import SendMessages from '../pages/SendMessages';
import ViewMessages from '../pages/ViewMessages';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} /> 
            <Route path="/send_messages" element={<SendMessages/>}/>
            <Route path="/view_messages" element={<ViewMessages/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;