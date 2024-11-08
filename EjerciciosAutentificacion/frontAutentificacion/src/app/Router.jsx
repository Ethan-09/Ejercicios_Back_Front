import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Messages from '../pages/Messages';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} /> 
            <Route path="/messages" element={<Messages/>}/>
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;