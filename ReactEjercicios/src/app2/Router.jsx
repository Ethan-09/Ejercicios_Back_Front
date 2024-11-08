import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages2/Home';
import Character from '../pages2/Page2';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} /> 
            <Route path="/character/:id" element={<Character/>} />
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;